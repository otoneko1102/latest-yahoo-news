const axios = require('axios');
const xml2js = require('xml2js');
const { CATEGORY_URLS } = require('./lib/config');

const parser = new xml2js.Parser();

/**
 * @async
 * @function
 * Get the latest news list from Yahoo!News.
 * Yahoo!ニュースの最新ニュース一覧を取得します。
 * @param {'top' | 'business' | 'entertainment' | 'sports' | 'domestic' | 'it' | 'science' | 'world' | 'local' | 'en'} category - 取得するニュースのカテゴリ / News category.
 * @returns {Promise<{ success: boolean, news: { title: string, link: string, description: string, pubDate: number, image?: string }[] }>} ニュースデータ / News data.
 */
async function yahooNews(category = 'top') {
  if (!CATEGORY_URLS[category]) {
    throw new Error(`Invalid category: ${category}. Valid categories are ${Object.keys(CATEGORY_URLS).join(', ')}`);
  }

  const url = CATEGORY_URLS[category];
  try {
    const response = await axios.get(url);
    const result = await parser.parseStringPromise(response.data);

    const items = result.rss.channel[0].item;

    const newsPromises = items.map(async item => {
      const link = item.link[0];
      const { image, description } = category === 'en' ? { image: item['media:content'][0].$.url, description: item.source[0].$.url } : await getExtra(link);

      return {
        title: item.title[0],
        link: link.endsWith('?source=rss') ? link.slice(0, -'?source=rss'.length) : link,
        description: description,
        pubDate: new Date(category === item.pubDate[0]).getTime(),
        image: image
      };
    });

    const news = await Promise.all(newsPromises);
    return { success: true, news };

  } catch (error) {
    console.error(error.message);
    return { success: false, news: [] };
  }
}

async function getExtra(link) {
  try {
    const response = await axios.get(link);
    const html = response.data;

    const image = html.match(/<meta property="og:image" content="(.*?)"/)?.[1] || null;
    const description = html.match(/<meta property="og:description" content="(.*?)"/)?.[1] || null;

    return { image, description };
  } catch (error) {
    return { image: null, description: null };
  }
}

module.exports = yahooNews;

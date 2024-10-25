const axios = require('axios');
const xml2js = require('xml2js');
const { CATEGORY_URLS } = require('./lib/config');

const parser = new xml2js.Parser();

/**
 * Yahoo!ニュースの最新ニュース一覧を取得します。
 * @param {'top' | 'business' | 'entertainment' | 'sports' | 'domestic' | 'it' | 'science' | 'world' | 'local'} category - 取得するニュースのカテゴリ
 * @returns {Promise<{ success: boolean, news: { title: string, link: string, description: string, pubDate: number, image?: string }[] }>} ニュースデータ
 */
async function yahooNews(category = 'top') {
  if (!(Object.keys(CATEGORY_URLS)).includes(category)) throw new Error('invalid category.');

  const url = CATEGORY_URLS[category];
  try {
    const response = await axios.get(url);
    
    const result = await parser.parseStringPromise(response.data);
    const items = result.rss.channel[0].item;

    const newsPromises = items.map(async item => {
      const { image, description } = await getExtra(item.link[0]);

      return {
        title: item.title[0],
        link: item.link[0].endsWith('?source=rss') ? item.link[0].slice(0, -'?source=rss'.length) : item.link[0],
        description: description,
        pubDate: new Date(item.pubDate[0]).getTime(),
        image: image
      };
    });

    const news = await Promise.all(newsPromises);

    return {
      success: true,
      news: news
    };
  } catch {
    return {
      success: false,
      news: []
    };
  }
}

/**
 * ニュースのリンクから要素を取得します。
 * @param {string} link - ニュース記事のリンク
 * @returns {Promise<{ image?: string, description?: string }>} 要素
 */
async function getExtra(link) {
  const result = {};
  try {
    const response = await axios.get(link);
    const html = response.data;

    const matchImage = html.match(/<meta property="og:image" content="(.*?)"/);
    result.image = matchImage ? matchImage[1] : null;

    const matchDescription = html.match(/<meta property="og:description" content="(.*?)"/);
    result.description = matchDescription ? matchDescription[1] : null;
  } catch {
    result.image = null, result.description = null;
  }
  return result;
}

module.exports = yahooNews;

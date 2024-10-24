const axios = require('axios');
const xml2js = require('xml2js');
const { CATEGORY_URLS } = require('./lib/config');

const parser = new xml2js.Parser();

/**
 * Yahoo!ニュースの最新ニュース一覧を取得します。
 * @param {'top' | 'business' | 'entertainment' | 'sports' | 'domestic' | 'it' | 'science' | 'world' | 'local'} category - 取得するニュースのカテゴリ
 * @returns {Promise<{ success: boolean, news: { title: string, link: string, pubDate: number, image?: string }[] }>} ニュースデータ
 */
async function yahooNews(category = 'top') {
  if (!(Object.keys(CATEGORY_URLS)).includes(category)) throw new Error('invalid category.');

  const url = CATEGORY_URLS[category];
  try {
    const response = await axios.get(url);
    
    const result = await parser.parseStringPromise(response.data);
    const items = result.rss.channel[0].item;

    const newsPromises = items.map(async item => {
      const imageUrl = await getThumbnail(item.link[0]);

      return {
        title: item.title[0],
        link: item.link[0],
        pubDate: new Date(item.pubDate[0]).getTime(),
        image: imageUrl
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
 * ニュースのリンクから画像URLを取得します。
 * @param {string} link - ニュース記事のリンク
 * @returns {Promise<string | undefined>} 画像URL
 */
async function getThumbnail(link) {
  try {
    const response = await axios.get(link);
    const html = response.data;

    const match = html.match(/<meta property="og:image" content="(.*?)"/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

module.exports = yahooNews;

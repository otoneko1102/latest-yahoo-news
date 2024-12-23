export type NewsCategory = 'top' | 'business' | 'entertainment' | 'sports' | 'domestic' | 'it' | 'science' | 'world' | 'local' | 'en';

export interface NewsItem {
  title: string;
  link: string;
  description?: string,
  pubDate: number;
  image?: string;
}

export interface FetchYahooNewsResult {
  success: boolean;
  news: NewsItem[];
}

/**
 * @async
 * @function
 * Get the latest news list from Yahoo!News.
 * Yahoo!ニュースの最新ニュース一覧を取得します。
 * @param {NewsCategory} category - 取得するニュースのカテゴリ / News categry.
 * @returns {Promise<FetchYahooNewsResult>} ニュースデータ / News data.
 */
declare function yahooNews(category?: NewsCategory): Promise<FetchYahooNewsResult>;

export default yahooNews;

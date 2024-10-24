export type NewsCategory = 'top' | 'business' | 'entertainment' | 'sports' | 'domestic' | 'it' | 'science' | 'world' | 'local';

export interface NewsItem {
  title: string;
  link: string;
  description: string,
  pubDate: number;
  image?: string;
}

export interface FetchYahooNewsResult {
  success: boolean;
  news: NewsItem[];
}

/**
 * Yahoo!ニュースの最新ニュース一覧を取得します。
 * @param {NewsCategory} category - 取得するニュースのカテゴリ
 * @returns {Promise<FetchYahooNewsResult>} ニュースデータ
 */
declare function yahooNews(category?: NewsCategory): Promise<FetchYahooNewsResult>;

export = yahooNews;

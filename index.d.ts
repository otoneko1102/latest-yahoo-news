// 型定義ファイル for latest-yahoo-news

export type NewsCategory =
  | 'top'
  | 'business'
  | 'entertainment'
  | 'sports'
  | 'domestic'
  | 'it'
  | 'science'
  | 'world'
  | 'local'
  | 'en';

/**
 * ニュースアイテムの型定義
 */
export interface NewsItem {
  /** ニュースのタイトル */
  title: string;
  /** ニュースのリンク */
  link: string;
  /** ニュースの説明（オプション） */
  description?: string;
  /** 公開日時（Unixタイムスタンプ） */
  pubDate: number;
  /** ニュース画像のURL（オプション） */
  image?: string;
}

/**
 * ニュース取得結果の型定義
 */
export interface FetchYahooNewsResult {
  /** 成功フラグ */
  success: boolean;
  /** ニュースアイテムの配列 */
  news: NewsItem[];
}

/**
 * Yahoo!ニュースの最新ニュース一覧を取得する非同期関数
 * @returns {Promise<FetchYahooNewsResult>} ニュース取得結果
 */
export declare function fetchYahooNews(): Promise<FetchYahooNewsResult>;

/**
 * パッケージのデフォルトエクスポート
 */
declare const latestYahooNews: {
  fetchYahooNews: typeof fetchYahooNews;
};

export default latestYahooNews;

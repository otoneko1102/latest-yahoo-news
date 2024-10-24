# latest-yahoo-news
Yahoo!ニュースの最新ニュース一覧を取得します。

## 使い方
### 例
```js
const yahooNews = require('latest-yahoo-news');

// 任意。デフォルトで 'top' が指定される。
const category = 'top'; // 'top' | 'business' | 'entertainment' | 'sports' | 'domestic' | 'it' | 'science' | 'world' | 'local'
(async () => {
  console.log(await yahooNews(category));
})();
```

### 結果 (2024/10/24 11:04 時点)
```
{
  success: true,
  news: [
    {
      title: '各党「防災」公約 問われる実効性',
      link: 'https://news.yahoo.co.jp/pickup/6517424?source=rss',
      pubDate: 1729733196000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/24/5a250b956300eaf1a294febb19c782fa4c079a73b4167a1e66f65343e83ff3ae.jpg'
    },
    {
      title: '再審開始決定 初開示の証拠287点',
      link: 'https://news.yahoo.co.jp/pickup/6517415?source=rss',
      pubDate: 1729727006000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/24/dbd92fed8c5c7991fe8a3c96b83db14026693a735cf863315ca0a6dc9436730e.jpg'
    },
    {
      title: '沖縄で警報級大雨 25日まで警戒',
      link: 'https://news.yahoo.co.jp/pickup/6517420?source=rss',
      pubDate: 1729730942000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/24/8d340f949711952b513403c63ff5be05c8b393237fed91ab0fac9fa5249213ff.jpg'
    },
    {
      title: '漁船が転覆1人死亡 2人行方不明',
      link: 'https://news.yahoo.co.jp/pickup/6517425?source=rss',
      pubDate: 1729733655000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/24/0a04bd00ccd58388625201b485e98b27caa2ff1e1e9ef7f481c8e88e87c91664.jpg'
    },
    {
      title: 'ウ当局 北朝鮮兵に投降呼びかけ',
      link: 'https://news.yahoo.co.jp/pickup/6517417?source=rss',
      pubDate: 1729729824000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/24/0e20b7b2215da690d74259778fe7a25fd47351ee3b3ee6dc426951e9f0db6315.jpg'
    },
    {
      title: '百万ドル贈呈巡り マスク氏に警告',
      link: 'https://news.yahoo.co.jp/pickup/6517421?source=rss',
      pubDate: 1729731210000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/24/3a480727ebc93b4c98b4f88a45a38b0c07b332a0213adfcbc63e8c372702dcea.jpg'
    },
    {
      title: '「君の名は。」聖地で彗星 話題に',
      link: 'https://news.yahoo.co.jp/pickup/6517419?source=rss',
      pubDate: 1729730135000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/24/718bce0c5c0afe8ad5fad884283c855d130c98159047677f7a20f22c707828bb.jpg'
    },
    {
      title: '「団地のふたり」視聴者憧れる訳',
      link: 'https://news.yahoo.co.jp/pickup/6517422?source=rss',
      pubDate: 1729732030000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/24/ecd279b9262cdaec39da5bea55d54d7f3e29cb30b1c3aa3189bc57127c4f0170.jpg'
    }
  ]
}
```
> 重要: 取得に失敗した場合 success: false になります。

## Get Support
<a href="https://discord.gg/yKW8wWKCnS"><img src="https://discordapp.com/api/guilds/1005287561582878800/widget.png?style=banner4" alt="Discord Banner"/></a>

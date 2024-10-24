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

### 結果 (2024/10/24 23:50 時点)
```
{
  success: true,
  news: [
    {
      title: '自民は苦戦し立憲が大幅増へ 読売',
      link: 'https://news.yahoo.co.jp/pickup/6517522?source=rss',
      description: '読売新聞社は、２７日投開票の衆院選の終盤情勢を探るため、２２～２４日に世論調査を行った。選挙戦は、定数４６５のうち与党の過半数（２３３議席）確保を巡る激しい攻防となっている。自民党は政治資金問題を受',
      pubDate: 1729780808000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/24/2dc4637b02de0e396ce10f595abc72470e6c4cf1c909d48b6bc2bbc82a0f67c0.jpg'
    },
    {
      title: '候補者が「ショート動画」 懸念も',
      link: 'https://news.yahoo.co.jp/pickup/6517504?source=rss',
      description: '２７日投開票の衆院選では、街頭演説や政見放送を短く編集した「ショート動画」をＳＮＳで発信する候補者が目立つ。７月の東京都知事選でこうした動画を多用した候補者が躍進したことを受け、視聴時間が短い動画を',
      pubDate: 1729771243000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/24/c4336ac72cb2b9aef6b72c751ee4dc39924dc93cabe6658ec357e565448e768b.jpg'
    },
    {
      title: '「最低賃金1500円」企業に戸惑い',
      link: 'https://news.yahoo.co.jp/pickup/6517509?source=rss',
      description: 'Tetsushi Kajimoto［東京　２４日　ロイター］ -     ２７日に迫った衆議院選挙で多くの政党が訴える最低賃金１５００円への引き上げについて、企業の間に戸惑いが広がっている。これまで',
      pubDate: 1729773554000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/24/86679ae9362554f0efecf04d80871d86fa692cbc85a89764e455f9ac7860c322.jpg'
    },
    {
      title: '連続殺人 父の殺害容疑で再逮捕へ',
      link: 'https://news.yahoo.co.jp/pickup/6517521?source=rss',
      description: '東京・台東区で4歳の娘らに不凍液を摂取させて殺害した疑いで逮捕された夫婦について、警視庁は6年前に死亡した父親も同様に殺害した疑いが強まったとして、25日にも再逮捕する方針を固めました。',
      pubDate: 1729779537000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/24/9805c9cf8601f15c430bbd258685e0eb28932e565832b927d9183ad345af3f1c.jpg'
    },
    {
      title: '1歳死亡 暴行受けた後におう吐か',
      link: 'https://news.yahoo.co.jp/pickup/6517517?source=rss',
      description: '大阪府内のマンションの一室で1歳の男の子に暴行を加え、死亡させたとして母親の交際相手の男が逮捕された事件で、男の子が暴行を受けたとみられる日の夜、おう吐していたことが新たに分かりました。',
      pubDate: 1729777500000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/24/91634343d9aa1c9d2673c439b2e2e10bccaccab62f8340d21f244e0300d73955.jpg'
    },
    {
      title: '幹部巡る報道を否定 J1鳥栖が声明',
      link: 'https://news.yahoo.co.jp/pickup/6517484?source=rss',
      description: '公式リリースで発表　J1サガン鳥栖は10月24日、当クラブの幹部が他のJ1クラブのコーチに助言を仰いだとされる一部報道に関して、「当クラブはそのような事実はないと認識しております」と声明を発表した。',
      pubDate: 1729761291000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/24/69a6940792742d944acc30df0624603c0f831a0a724137fc409175b4a68a6b9c.jpg'
    },
    {
      title: '清原正吾の指名なく 会見場は沈黙',
      link: 'https://news.yahoo.co.jp/pickup/6517516?source=rss',
      description: '横浜市内の慶大校舎内会見場。9台のテレビカメラ、約60人の報道陣が見守る中、壇上に清原正吾内野手（4年）が最後まで現れることはなかった。',
      pubDate: 1729777190000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/24/4bfd9ec4da99af3ed0e981b5a2832edee256636ac5a2df4d3b951722a4e8f87f.jpg'
    },
    {
      title: 'ドラフト 慶大・清原ら指名漏れ',
      link: 'https://news.yahoo.co.jp/pickup/6517513?source=rss',
      description: '＜プロ野球ドラフト会議＞◇24日　ドラフト会議は育成枠も含めすべての指名が終了した。高校生ではセンバツ優勝でU18日本代表の健大高崎（群馬）箱山遥人捕手、甲子園に4度出場しU18日本代表の広陵（広島',
      pubDate: 1729775201000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/24/618186cbe1e9e4c155ecafa8cb054a9d5357e71b5d87a2e3fc104f55c25ca522.jpg'
    }
  ]
}
```
> 重要: 取得に失敗した場合 success: false になります。

## Get Support
<a href="https://discord.gg/yKW8wWKCnS"><img src="https://discordapp.com/api/guilds/1005287561582878800/widget.png?style=banner4" alt="Discord Banner"/></a>

# latest-yahoo-news
Get the latest news list from Yahoo!News.<br>
Yahoo!ニュースの最新ニュース一覧を取得します。

> `3.0.0 <= x` supports English!

###### Teams
<a href="https://oto.pet/"><img src="https://www.otoneko.cat/img/logo.png" alt="OTONEKO.CAT" style="display: block; width: auto; height: 100px;"/></a>
<a href="https://www.otoho.me/"><img src="https://www.otoho.me/img/logo.png" alt="Oto Home" style="display: block; width: auto; height: 100px;"/></a>

## Usage
### Example
```js
const yahooNews = require('latest-yahoo-news');

// Optional. Default is 'top'.
const category = 'top'; // 'top' | 'business' | 'entertainment' | 'sports' | 'domestic' | 'it' | 'science' | 'world' | 'local' | 'en'
(async () => {
  console.log(await yahooNews(category));
})();
```

### Result (2024/10/25 09:00)
> If category is `en`, `news.description` is news source URL.<br>
> カテゴリが `en` の場合、 `news.description` はニュースソースの URL です。
```
{
  success: true,
  news: [
    {
      title: '台風21号発生 来週に沖縄接近恐れ',
      link: 'https://news.yahoo.co.jp/pickup/6517530',
      description: '気象庁は25日午前6時にマリアナ諸島付近で大型の台風21号が発生したと発表しました。今月3つ目の台風です。',
      pubDate: 1729810523000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/25/3c699b493bc9a6e17a743a66a4f4e61f289e8e753b61f90daf9a83b38a7bb445.jpg'
    },
    {
      title: '米大統領選 国境州で移民への不満',
      link: 'https://news.yahoo.co.jp/pickup/6517532',
      description: '11月の米大統領選で激戦州の一つと位置付けられる西部アリゾナでは、メキシコ国境を経由した中南米からの移民増加に住民の不満が高まっている。',
      pubDate: 1729812145000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/25/32a4c2c85155aa0141fe3d8aca745f0cdfadf5a9d2b2851e670efa4ddc7965f0.jpg'
    },
    {
      title: '教育費が家計にずしり 若者の不安',
      link: 'https://news.yahoo.co.jp/pickup/6517533',
      description: '２７日投開票の衆院選に合わせ、鹿児島県内で浮き彫りとなっている課題について現状を探るとともに、県内４選挙区に立候補した１２人の考えを聞いた。（衆院選かごしま・連載「論点を問う」⑧より）',
      pubDate: 1729812222000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/25/80f9c4e42a90cebd99c53e79278d10abc5d8be79980fef698ec1741f3e55a719.jpg'
    },
    {
      title: '「投票済証」のネット販売相次ぐ',
      link: 'https://news.yahoo.co.jp/pickup/6517529',
      description: '投票所で交付される「投票済証」がインターネットのオークションサイトで販売されている。27日投開票の衆院選の投票済証も出品され、1枚数百円の値が付いている。投票済証が商品やサービスの割引に使われたり、',
      pubDate: 1729810776000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/25/c877e396ae379ebfca47732846288ca43b964eafb04ab9617d956244265e41fb.jpg'
    },
    {
      title: '撮影スポットの池が消滅 噴火影響',
      link: 'https://news.yahoo.co.jp/pickup/6517527',
      description: '2014年の御嶽山噴火で進んだ火山灰堆積　2014年の御嶽山噴火の際に降り注いだ火山灰の堆積が進んでいた山頂直下の天然の池「二ノ池」が干上がり、消滅したことが分かった。雨が降れば一時的にくぼみに水が',
      pubDate: 1729809182000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/25/7776797473127af42d73f850570d475fc67a7f3387f4a420b25fe3b3ffe9efa9.jpg'
    },
    {
      title: '大谷がWS前日会見 興奮している',
      link: 'https://news.yahoo.co.jp/pickup/6517534',
      description: 'ドジャース-ヤンキースの“歴史的カード”も「なるべく冷静なプレーがしたい」　ドジャースの大谷翔平投手は24日（日本時間25日）、本拠地ドジャースタジアムでワールドシリーズ（7回戦制）の前日会見に臨ん',
      pubDate: 1729812361000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/25/eb4a77923626569b8ae48de68155d94d8ec990b791f12764e495e127cba767f9.jpg'
    },
    {
      title: '慶大清原 くふうハヤテ獲得名乗り',
      link: 'https://news.yahoo.co.jp/pickup/6517531',
      description: '横浜市内の慶大校舎内に用意された記者会見場。9台のテレビカメラ、約60人の報道陣が見守る中、最後まで壇上に清原正吾内野手（22）が現れることはなかった。会議開始から約3時間半。育成ドラフトが終了して',
      pubDate: 1729810025000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/25/8b650c3feff87dea842c60d1876bbdfba3a136da5ee0bdefae2a628954bc8bd5.jpg'
    },
    {
      title: '手越祐也「XY」に電撃加入 発表',
      link: 'https://news.yahoo.co.jp/pickup/6517524',
      description: '歌手・タレントの手越祐也が、YOSHIKIがプロデュースするバンド＆ボーイズグループ「XY（読み：エックスワイ）」に新加入することが25日、発表された。',
      pubDate: 1729805025000,
      image: 'https://news-pctr.c.yimg.jp/t/news-topics/images/tpc/2024/10/25/f0a8a6e4a295b09fe2538be9b6ca37bb80edfa83a91f00d5edf66c5c70f97da7.jpg'
    }
  ]
}
```
> If retrieval fails, returns `success: false`.<br>
> 重要: 取得に失敗した場合 `success: false` になります。

## Get Support
<a href="https://discord.gg/yKW8wWKCnS"><img src="https://discordapp.com/api/guilds/1005287561582878800/widget.png?style=banner4" alt="Discord Banner"/></a>

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "94ade96dc43c4e6aa2861f8a24cc748c"
  },
  {
    "url": "assets/css/0.styles.22382368.css",
    "revision": "3e2aec484c5ac09dc28ab94a734ddf2d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fa7faaf4.js",
    "revision": "17a4a36a04c34100060a117be850f6f4"
  },
  {
    "url": "assets/js/11.35071aac.js",
    "revision": "d7c8068e87db324918ad5c710b9c2c1e"
  },
  {
    "url": "assets/js/12.df4d2bae.js",
    "revision": "44128704ff17c6f53840668e81c3874d"
  },
  {
    "url": "assets/js/13.d71f512f.js",
    "revision": "4eac94fc3b29787f305163dbfe6cfa3e"
  },
  {
    "url": "assets/js/14.7acd84b3.js",
    "revision": "490d53b3c51e6d77fd8273b1ea62e308"
  },
  {
    "url": "assets/js/15.331c9ae8.js",
    "revision": "0c877e045b13f313d23681c7a7485158"
  },
  {
    "url": "assets/js/16.9e13b7d9.js",
    "revision": "94c15ec855b5001821f4038322b303dc"
  },
  {
    "url": "assets/js/17.6d61ed18.js",
    "revision": "83fe0d8f8d0fe9071b06c2e34ba7eeb2"
  },
  {
    "url": "assets/js/18.5371266f.js",
    "revision": "57c792f536dc86db4026cd931711f11c"
  },
  {
    "url": "assets/js/19.982fc226.js",
    "revision": "269f6e8faae355638c18541e735d93ce"
  },
  {
    "url": "assets/js/2.72b81314.js",
    "revision": "d5c8ad2d6978a8c3a2ad20187a92e9b5"
  },
  {
    "url": "assets/js/20.f096fff0.js",
    "revision": "72e918f6509050575eb9d40a18b4e0a8"
  },
  {
    "url": "assets/js/21.045c292d.js",
    "revision": "5e7b6ff50f0289238f3ab795e0774aed"
  },
  {
    "url": "assets/js/22.6aa28e59.js",
    "revision": "20583c643233c88290a14bd86e6471c1"
  },
  {
    "url": "assets/js/3.c03c0779.js",
    "revision": "298f70bcec318e21a379804f52439186"
  },
  {
    "url": "assets/js/4.d0355759.js",
    "revision": "9b7221a08ca4912bf411d1f100375a79"
  },
  {
    "url": "assets/js/5.8c371bfa.js",
    "revision": "ece903cb2cd66b03007e9a647868bda5"
  },
  {
    "url": "assets/js/6.5cf21165.js",
    "revision": "28ffbdbe4ed4ae9d1b113d7e7649bceb"
  },
  {
    "url": "assets/js/7.32a766e6.js",
    "revision": "99d19634ff22b63f36ad6701685e3578"
  },
  {
    "url": "assets/js/8.f7ef97dd.js",
    "revision": "9270224614b237a41bd18d96e679aff1"
  },
  {
    "url": "assets/js/9.edefe0c8.js",
    "revision": "557b719494ee68d123b1ffe50d3cfba1"
  },
  {
    "url": "assets/js/app.acf1f6c2.js",
    "revision": "b82cb456c0a1375e3722d7b8a4cfdf49"
  },
  {
    "url": "cover.png",
    "revision": "fbc1ae610f9ea5b673e720967245d442"
  },
  {
    "url": "de/index.html",
    "revision": "e5a9ab642fe9b565fdae654c6b328247"
  },
  {
    "url": "de/zusammenfassungen/phpmagazin/2019/june/die-besten-fünf-PHP-frameworks.html",
    "revision": "90e47923baf065c6e23035e7f56154c9"
  },
  {
    "url": "de/zusammenfassungen/phpmagazin/2019/june/index.html",
    "revision": "0ecaf69c2c6ebb86fdbe9744ec74e6df"
  },
  {
    "url": "de/zusammenfassungen/phpmagazin/2019/june/kolumne.html",
    "revision": "ba6015130f762746701fd9ce6bf01bb1"
  },
  {
    "url": "index.html",
    "revision": "9f92a65583bdd1061bff8d868eff414a"
  },
  {
    "url": "summaries/index.html",
    "revision": "d7ba5f0869b491af50eeefe69fc42adb"
  },
  {
    "url": "summaries/phpmagazin/2019/june/column_de.html",
    "revision": "5aa2e876215a49b1768f22f4a04b254d"
  },
  {
    "url": "summaries/phpmagazin/2019/june/column.html",
    "revision": "c263a50546699821688a99b0a8175deb"
  },
  {
    "url": "summaries/phpmagazin/2019/june/index.html",
    "revision": "afdc7d2c3837451f48477dcc8d61872a"
  },
  {
    "url": "summaries/phpmagazin/2019/june/the-five-best-PHP-frameworks_de.html",
    "revision": "97eeca20106be6a8ef82dfcd0bef4990"
  },
  {
    "url": "tutorials/index.html",
    "revision": "a0001ab70bc4cec443804374c4f01fb6"
  },
  {
    "url": "tutorials/php/index.html",
    "revision": "691ab89e8e72f63141013c74ef2360c2"
  },
  {
    "url": "tutorials/php/install-xdebug.html",
    "revision": "7f2b5e79fcacc39eddb54a77a4225117"
  },
  {
    "url": "tutorials/xampp/index.html",
    "revision": "c47ad1ff76f92724b17d713ac6c33b97"
  },
  {
    "url": "tutorials/xampp/upgrade.html",
    "revision": "95566057df54baa44da65ba29ea45840"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

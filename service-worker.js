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
    "revision": "9228c91084e488cc08226c6526d980a9"
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
    "url": "assets/js/app.1d256f76.js",
    "revision": "dbe678b2e45520b52bc2ab32edc9f1cb"
  },
  {
    "url": "cover.png",
    "revision": "fbc1ae610f9ea5b673e720967245d442"
  },
  {
    "url": "de/index.html",
    "revision": "b432051f292608095bf27d503c69f8c6"
  },
  {
    "url": "de/zusammenfassungen/phpmagazin/2019/june/die-besten-fünf-PHP-frameworks.html",
    "revision": "4db43216954ca9d2d84f8eefab9655da"
  },
  {
    "url": "de/zusammenfassungen/phpmagazin/2019/june/index.html",
    "revision": "cfae6c1fc1b7c56661c76065d6913fa7"
  },
  {
    "url": "de/zusammenfassungen/phpmagazin/2019/june/kolumne.html",
    "revision": "4c9db7349ac4799039b5efd4ee019e0a"
  },
  {
    "url": "index.html",
    "revision": "4d5ae14d229a06a311373dc196afdcef"
  },
  {
    "url": "summaries/index.html",
    "revision": "c370c365ff2113fbc1c11a86f8988819"
  },
  {
    "url": "summaries/phpmagazin/2019/june/column_de.html",
    "revision": "fc00f14d04e8b67fa6793e4a464f4c2f"
  },
  {
    "url": "summaries/phpmagazin/2019/june/column.html",
    "revision": "f46b3c5a38b12276a1d5d5173ee0bb6b"
  },
  {
    "url": "summaries/phpmagazin/2019/june/index.html",
    "revision": "5633be875c0cb7c54f22d4dcbf0d5177"
  },
  {
    "url": "summaries/phpmagazin/2019/june/the-five-best-PHP-frameworks_de.html",
    "revision": "d43f69b4eb4a9932b97be52fe4b011b5"
  },
  {
    "url": "tutorials/index.html",
    "revision": "101ef48eabae2cc0e69f195c5b66e6c6"
  },
  {
    "url": "tutorials/php/index.html",
    "revision": "c35527fe6ad776bda910eaaaa2ace2dc"
  },
  {
    "url": "tutorials/php/install-xdebug.html",
    "revision": "22668f64791e21085a1ea6a8b9804133"
  },
  {
    "url": "tutorials/xampp/index.html",
    "revision": "9b42ff44c215749d701cd407fe603670"
  },
  {
    "url": "tutorials/xampp/upgrade.html",
    "revision": "fd6da363f61f5b042aaf3e7d174d6245"
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

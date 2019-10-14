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
    "revision": "edfc81ebc403500e68dd84254a479302"
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
    "url": "assets/js/10.69989b78.js",
    "revision": "0cdd34a967616cf975e52297bd7b8cfb"
  },
  {
    "url": "assets/js/11.0f29f84d.js",
    "revision": "fada73ae0cf13de816e2d3622f67e7e0"
  },
  {
    "url": "assets/js/12.8aa19776.js",
    "revision": "6ae119ce4fed63aa24cfdf662c19340e"
  },
  {
    "url": "assets/js/13.c6f0814e.js",
    "revision": "ce8b4198206f6a8e0a7fa7d351189e73"
  },
  {
    "url": "assets/js/14.6b006015.js",
    "revision": "428013fbede5792b73d00c70172675e6"
  },
  {
    "url": "assets/js/15.7c667703.js",
    "revision": "bdf35cc34a6a777c2a1e9ab20d674ad0"
  },
  {
    "url": "assets/js/16.d27756e2.js",
    "revision": "1743987742e26a1a3b0d49b865a2070e"
  },
  {
    "url": "assets/js/17.a1ef1b16.js",
    "revision": "a095ba9f1f36f31de18e3775d0a334d5"
  },
  {
    "url": "assets/js/18.8ab3b295.js",
    "revision": "10557d9f156748f2a23aa33fe658127d"
  },
  {
    "url": "assets/js/2.ac1110df.js",
    "revision": "d5c8ad2d6978a8c3a2ad20187a92e9b5"
  },
  {
    "url": "assets/js/3.37f899a6.js",
    "revision": "298f70bcec318e21a379804f52439186"
  },
  {
    "url": "assets/js/4.2d7f9571.js",
    "revision": "24bd0cdf120b30b31253ed4713921053"
  },
  {
    "url": "assets/js/5.8c371bfa.js",
    "revision": "ece903cb2cd66b03007e9a647868bda5"
  },
  {
    "url": "assets/js/6.4da41db1.js",
    "revision": "28ffbdbe4ed4ae9d1b113d7e7649bceb"
  },
  {
    "url": "assets/js/7.23f49b1d.js",
    "revision": "1b0c08d76b404d642f4cae61f3ef5f32"
  },
  {
    "url": "assets/js/8.8af654e4.js",
    "revision": "b44132c58bc0cef64061c7228fba5588"
  },
  {
    "url": "assets/js/9.64f7491d.js",
    "revision": "a1f7ab38866cc0a6b424c3027f9260d0"
  },
  {
    "url": "assets/js/app.4d139546.js",
    "revision": "e7c78d28adbd1426a1e7364c7e558998"
  },
  {
    "url": "cover.png",
    "revision": "fbc1ae610f9ea5b673e720967245d442"
  },
  {
    "url": "index.html",
    "revision": "5174af678537f9a7224e8bb060ef9109"
  },
  {
    "url": "summaries/index.html",
    "revision": "7dc34042caf30611f14aaaaf1057c9b9"
  },
  {
    "url": "summaries/phpmagazin/2019/june/column_de.html",
    "revision": "8b1fa3c7bd87c36693f73f6ec8d0d913"
  },
  {
    "url": "summaries/phpmagazin/2019/june/column.html",
    "revision": "02849a7c609f4e6dfa09cf59ef07b14b"
  },
  {
    "url": "summaries/phpmagazin/2019/june/index.html",
    "revision": "769110a3ef5ec33ef75f350aa2487dda"
  },
  {
    "url": "summaries/phpmagazin/2019/june/the-five-best-PHP-frameworks_de.html",
    "revision": "7cfbb0c6e065eef3d97e801cffbf9b8b"
  },
  {
    "url": "tutorials/index.html",
    "revision": "5f9006d8338e927a24fa928d64a02190"
  },
  {
    "url": "tutorials/php/index.html",
    "revision": "fd3709a3b125666a032d533bec11747d"
  },
  {
    "url": "tutorials/php/install-xdebug.html",
    "revision": "eecade7bafff9db1f008c20599733eb5"
  },
  {
    "url": "tutorials/xampp/index.html",
    "revision": "574ba6ea3e2edfcf2a9f4ebbc5d3130e"
  },
  {
    "url": "tutorials/xampp/upgrade.html",
    "revision": "eee2b2758e7316ff3587c19c0106c730"
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

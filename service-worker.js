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
    "revision": "69daee171dd311cae9ca2efec7e6025a"
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
    "url": "assets/js/10.14f65995.js",
    "revision": "0cdd34a967616cf975e52297bd7b8cfb"
  },
  {
    "url": "assets/js/11.0532b6df.js",
    "revision": "fada73ae0cf13de816e2d3622f67e7e0"
  },
  {
    "url": "assets/js/12.f1aaecfb.js",
    "revision": "6ae119ce4fed63aa24cfdf662c19340e"
  },
  {
    "url": "assets/js/13.386f75e7.js",
    "revision": "ce8b4198206f6a8e0a7fa7d351189e73"
  },
  {
    "url": "assets/js/14.d534c021.js",
    "revision": "428013fbede5792b73d00c70172675e6"
  },
  {
    "url": "assets/js/15.2799e18e.js",
    "revision": "bc039594a0ff9098f76a82d55ae297c3"
  },
  {
    "url": "assets/js/16.54d91e9f.js",
    "revision": "1743987742e26a1a3b0d49b865a2070e"
  },
  {
    "url": "assets/js/17.f2973026.js",
    "revision": "a095ba9f1f36f31de18e3775d0a334d5"
  },
  {
    "url": "assets/js/18.8ab3b295.js",
    "revision": "10557d9f156748f2a23aa33fe658127d"
  },
  {
    "url": "assets/js/2.72b81314.js",
    "revision": "d5c8ad2d6978a8c3a2ad20187a92e9b5"
  },
  {
    "url": "assets/js/3.c03c0779.js",
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
    "url": "assets/js/6.5cf21165.js",
    "revision": "28ffbdbe4ed4ae9d1b113d7e7649bceb"
  },
  {
    "url": "assets/js/7.69c5cb7c.js",
    "revision": "1b0c08d76b404d642f4cae61f3ef5f32"
  },
  {
    "url": "assets/js/8.35c5e907.js",
    "revision": "b44132c58bc0cef64061c7228fba5588"
  },
  {
    "url": "assets/js/9.593bad82.js",
    "revision": "a1f7ab38866cc0a6b424c3027f9260d0"
  },
  {
    "url": "assets/js/app.809eadc5.js",
    "revision": "03f83b2a6ca042b0ceb87f0a15ee9583"
  },
  {
    "url": "cover.png",
    "revision": "fbc1ae610f9ea5b673e720967245d442"
  },
  {
    "url": "index.html",
    "revision": "a24941cda02c9cc54b9326c928925bb3"
  },
  {
    "url": "summaries/index.html",
    "revision": "8ec333c8c3c58718710309acf8c31f57"
  },
  {
    "url": "summaries/phpmagazin/2019/june/column_de.html",
    "revision": "2cf68f6fc8d6044de9eed5d7d29eec2d"
  },
  {
    "url": "summaries/phpmagazin/2019/june/column.html",
    "revision": "641c2a52c401a1fbadd1cc382d0a5a6c"
  },
  {
    "url": "summaries/phpmagazin/2019/june/index.html",
    "revision": "51c869b9847b756e5c597118f9dc5143"
  },
  {
    "url": "summaries/phpmagazin/2019/june/the-five-best-PHP-frameworks_de.html",
    "revision": "e0b209a6178ba945297bedb087db66ec"
  },
  {
    "url": "tutorials/index.html",
    "revision": "f3e11bf183d4527842811ead84e72111"
  },
  {
    "url": "tutorials/php/index.html",
    "revision": "32a44e997dbad66e018c9385f91929c2"
  },
  {
    "url": "tutorials/php/install-xdebug.html",
    "revision": "fda0e586d8fa52a6ca33bd6d4d651bf1"
  },
  {
    "url": "tutorials/xampp/index.html",
    "revision": "5f6d8ef2548fbafdfb5c13a956ca6bd5"
  },
  {
    "url": "tutorials/xampp/upgrade.html",
    "revision": "b2a57ff4a98663bcf2ad22a09f64cb60"
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

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
    "revision": "6a7880ec18d9d94c1b225d05a07fa9db"
  },
  {
    "url": "assets/css/0.styles.9ba87a59.css",
    "revision": "38101e3c6a7b8199aa1570a1942674f9"
  },
  {
    "url": "assets/img/codepen.5eee1af7.svg",
    "revision": "5eee1af7b7c2fa21612838657ebd44aa"
  },
  {
    "url": "assets/img/facebook.a52c2470.svg",
    "revision": "a52c24702f300adface1d349a9c09ab7"
  },
  {
    "url": "assets/img/github.617870e4.svg",
    "revision": "617870e422d4b75087cdcf9ff298032e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e64585fb.js",
    "revision": "a5eccbabbe6c2f518bc13106e01b4b39"
  },
  {
    "url": "assets/js/11.f59bbb8b.js",
    "revision": "496d61dc777f1f6d6eae3ef4428ed9ac"
  },
  {
    "url": "assets/js/12.cefc8d56.js",
    "revision": "4c8c392c3d75816e17b6c80e8ee6fd3d"
  },
  {
    "url": "assets/js/13.e291e88d.js",
    "revision": "0d34eeaa6f7e95beac9cf6737ee039d6"
  },
  {
    "url": "assets/js/14.02270de6.js",
    "revision": "d114aac3d2c336d7db49b27464742998"
  },
  {
    "url": "assets/js/15.9e3294eb.js",
    "revision": "bb2fc5d0e0da41543b208e326a97046c"
  },
  {
    "url": "assets/js/16.ebea804e.js",
    "revision": "7378f15c5a601c3c3479d5eccf743822"
  },
  {
    "url": "assets/js/17.eec010ac.js",
    "revision": "47a33dcce7435e800b169c56e6338b5a"
  },
  {
    "url": "assets/js/2.581a478e.js",
    "revision": "241dc355a7b416b89173c399b5762a86"
  },
  {
    "url": "assets/js/3.885870a9.js",
    "revision": "dfa4c01ed9b1df98b33f3d775c5735a0"
  },
  {
    "url": "assets/js/4.2d04b258.js",
    "revision": "2dce57353fab71cda7ed19f640f82042"
  },
  {
    "url": "assets/js/5.b07dc178.js",
    "revision": "5d5fc8867b0ff987da0a236f6db7ed86"
  },
  {
    "url": "assets/js/6.9b34a6af.js",
    "revision": "7e7e6277defc5424802c1fed4db2be29"
  },
  {
    "url": "assets/js/7.e8a5f6bf.js",
    "revision": "927bc6f841b0670184268a11de40b717"
  },
  {
    "url": "assets/js/8.8d2808ef.js",
    "revision": "5a67ec6a5240cca177f400bd83007fe1"
  },
  {
    "url": "assets/js/9.5b17d312.js",
    "revision": "568fba90c97e656ee31b843182b91449"
  },
  {
    "url": "assets/js/app.996077fc.js",
    "revision": "e0dd735b0ffedf5f74c44b76bdf56485"
  },
  {
    "url": "dev/common.html",
    "revision": "a8f6074523154b697a8d89a70a4f0b17"
  },
  {
    "url": "dev/javascript.html",
    "revision": "da3ec8db7f87acfb242a3896276c6cd1"
  },
  {
    "url": "dev/react.html",
    "revision": "4359f0f25e7d17fbc138416eb769b303"
  },
  {
    "url": "dev/vuepress.html",
    "revision": "5a87c908eed9f2ef0c5d4f354df374fc"
  },
  {
    "url": "index.html",
    "revision": "1ca7aed116d05a18e7e66c0bef4eab9d"
  },
  {
    "url": "logo.jpg",
    "revision": "02c8c1ba236fc90040b2f433261f75f4"
  },
  {
    "url": "tools/fish.html",
    "revision": "2a2d431b7fcd2a651ec049eb61cfcd39"
  },
  {
    "url": "tools/hyper.html",
    "revision": "d0dc9e897f9ce995b50f8c28486f2e09"
  },
  {
    "url": "tools/screenshot.html",
    "revision": "c31ed2e2ffb92179645121812721a52e"
  },
  {
    "url": "tools/vscode.html",
    "revision": "aff6afc8cbfdccfdd4043a8de67f7182"
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

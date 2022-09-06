'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"version.json": "be69598f79035d0510e79889d309441f",
"main.dart.js": "eeecbf5b7810911db9ad90fdf526c35e",
"manifest.json": "41d021c9aea2860049ce1570ce041df0",
"index.html": "7dbc5bbe9c0d73bc8151768fac521609",
"/": "7dbc5bbe9c0d73bc8151768fac521609",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "aff38c7b772e2095efed905a4a591a62",
"assets/FontManifest.json": "ebd46994efbfa491665e059ace282664",
"assets/AssetManifest.json": "1e123f453cd792daae0c72e7d77cd39f",
"assets/asset/easyfootball.png": "d3de91c3d484f94adfe1f8edd1b43ba0",
"assets/asset/womanfootball.png": "a0ee66fcc8da1373a2c9b47cdd14ff5d",
"assets/asset/airplane.svg": "200284e80c1de58db3d6a69a0b8c888a",
"assets/asset/defmatch.png": "80fe5803a0e7e704680346b9c176b0f3",
"assets/asset/call.svg": "57b0b3984066680300e2302465598378",
"assets/asset/normalbackdata.jpg": "ea1da21ab6df03e0f9ce41ae4681b02b",
"assets/asset/footballdialog.png": "6fcf523be92b2d9a1289bbfb51bc2a08",
"assets/asset/backshapehome.png": "82b042dfc053f5b9e00a31be7be19e26",
"assets/asset/calendar.svg": "a70e0db408bb84605cdedac57e46e975",
"assets/asset/test.svg": "b111cb7873bf51ecf465d5664c901d18",
"assets/asset/dialogfootball.png": "6fcf523be92b2d9a1289bbfb51bc2a08",
"assets/asset/vip4.png": "2b0245d4d53cc54d2c3b3634e2ee2143",
"assets/asset/teamfootball.png": "ec4328b5513325ea12b83eb35c5d005b",
"assets/asset/midfootball.png": "586cd484ea24b647d2d5360148d67e05",
"assets/asset/copy.svg": "e1725bebc9f2f6784373f6dd5cfe3054",
"assets/asset/frame.svg": "cdea367bcaaf0f260e716565686bbbf4",
"assets/asset/hardbackdata.jpg": "6d6ea5aafe13dea0d195dee064aba653",
"assets/asset/playerfootball.png": "d6661c557f0fa3d6a27079e7a6cc3b34",
"assets/asset/zero.svg": "cd61513f6bf82d540fd93ad8040fddc3",
"assets/asset/easybackdata.jpeg": "c188883a4a0f600f5f261cfc36dd63be",
"assets/asset/vip2.png": "a2c7a750caf5802f0bfceb379d88215c",
"assets/asset/hardfootball.png": "14fe55067a418676ad387c7fc5f9cf28",
"assets/asset/group.png": "61b95a6b3bf9ccc914473628d3c24bcb",
"assets/asset/clock.svg": "057b82a1046dddeb290ab604f55948b3",
"assets/asset/hardback.png": "ca64c9d55535e42f512796a41a9a7458",
"assets/asset/gift.png": "133dfc0684b9df12cf4df065c6bb12da",
"assets/asset/leftmascotas.png": "565775fb07f86b2ae7fbc9df670e98ae",
"assets/asset/easyback.png": "ca64c9d55535e42f512796a41a9a7458",
"assets/asset/midback.png": "6bacf24cc46bf95fb163d60aa199e86e",
"assets/asset/rightmascotas.png": "0aed1800003e83225f15cef223f6a964",
"assets/asset/myline.png": "09c6b5e7ea728bdc71030adca67429de",
"assets/asset/vip3.png": "9a6021505f20713d8d9a3bbb8a159459",
"assets/asset/vector.png": "b24a68c30d2d18974d839f77f1f71ea5",
"assets/asset/edit.svg": "3bee21bf89c76b5bb35e5be16797a856",
"assets/asset/circleblue.png": "752192b45850894f655ac43ae76e0db1",
"assets/asset/cupqatar.png": "90f005194aa931e9db97a6bbeb6073e7",
"assets/asset/linechange.png": "92a348c9ea328b628ebb9d24520f4575",
"assets/asset/baner.png": "571e8fa9cef007e9df9472c5b00f5243",
"assets/asset/winmatch.png": "9f659cb68d5a4c2e463584c5bd2706d7",
"assets/asset/star.svg": "94c11cb6dd1f97662c013456f2cbb3d2",
"assets/asset/vip1.png": "9aeaa65fdf0539ea4fe3c6cffa793d45",
"assets/asset/message-question.svg": "dc5a3049cd28330b9e4991515dd4db9f",
"assets/fonts/IRANSans.ttf": "860ad172ae5c052dea861911dc17b92a",
"assets/fonts/Kalameh-Bold.ttf": "bbd8448e056821340fd2bbf64eba980a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Kalameh-Regular.ttf": "80e18c5c72de41fef904e68e8cb019f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

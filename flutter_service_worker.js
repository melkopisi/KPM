'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2adbda13015fe9a5c180481c2ff4654d",
".git/config": "ef975769026766b64341cb9dcc97d6eb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "523bc6804ed4e992508f8b5d085a7733",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ab9eaf2bf54783054b39cbf9b583a5a0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0114b9653800e182377d7d4fd4ef86e4",
".git/logs/refs/heads/master": "bc3a7b86b7412309f47a026c707abdcf",
".git/logs/refs/remotes/origin/master": "e49ccbbbef6f45563d9d73ed0a484fa3",
".git/objects/06/26c834dc9c8fea571f3f9a939cdd3f96d16e15": "566e4f391778132da0128a663b8ca22b",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/07b76feb0c0c58c281ce9b79d68ff1350c7cf4": "e39debff0a87c7266f6fd9c9c1968fbb",
".git/objects/0a/fc8d7e0333f8e9e2552669c8d1667e761754f2": "c3cb4d85715b98f8937d10a3ba8471c4",
".git/objects/0d/e86849f1480fc8c7e549000aa8dd00c1a9c5ef": "c7538504206164f20bcdaeff1d083f71",
".git/objects/13/6be893e26affce9e5470cc1fb6475f509aab7e": "3eecd1b40452f6319abe42ccfbeb9633",
".git/objects/14/d3610ccc74eae82062446001a3422c0de475cf": "ba7e49dd6390e321be15b38576eec0e1",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/b14b683f7fad18bb07103cedf9c5406b8cac2a": "47dbabb134412c4895852c2a5fda7ca5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/26/26888b79aa0900573c6016e716f7ac9e5f6625": "8b9e257e6a72f67d9d41bae8b2843e4e",
".git/objects/32/23b80175597bfddea71d522856e8051160ad93": "c85c8c44694fc86cdf9bd142f66cca6d",
".git/objects/3f/ebe60e73d1195be3271985a8b39a8c9a9ee4b8": "d284f31d20c1f0dd3017c7a1e0e06c7c",
".git/objects/45/f8dcadc44612acb8e24936e0bc83d65c9d519a": "3e6ca108c2e74c5fc11063e8c7a8daee",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/56/860bb118a1aba459217c262f0dbc6986e8537d": "0b0911e6eeecb1d52c5c630a16e6d5ea",
".git/objects/58/0b8570a6ccdc67a960736539d4a39bb8b5cfed": "bb5db64e6a80af2ce306423226c1f163",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/8aa2416f3760b01048dc1f4468217824cef4f0": "ab84dc14b7ac31b2b16be0825688ff68",
".git/objects/64/bbb549d3697ac7ce99872c3a6e9bc156b5df0f": "7d46d55eb85940ee1b80dceb2aea09e2",
".git/objects/6c/4676c47b91200b032cd913527ffb351bba4f36": "29f1d51192dabf407a495d8d6330a445",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7d/15f2566a0d9e413267d41b579896d60bc05682": "52773c8ae9c89f3e0cfb09620ad85ede",
".git/objects/82/d7cc4ba71dc42078fad67d44df1d2a9923e495": "7b34a1a7183b6c387776533ded4945f3",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/e55e2a14745a7ace838142697b5574b6f560e0": "2ce4e385203bf5bd0132cac1c9a7588c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8112ae4c4a56dcd60289dc2fac7b4ace454d27": "3b55b918b94770373ed28a99e7594a56",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/c74cc22b5ce6636642bf17d5ccf00601f70171": "c4d43b6ab89c2933d18a0f82c89b8bd3",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/b46f29e8fd6eb6aaaeaedcbe1d577de8935f43": "1f17c6e13a4ec50b3f0acbe2ff82bd1d",
".git/objects/98/037a19f78ae7523df06121485014b9bf42d5fa": "24f2da2d61fb7a76934151276925e935",
".git/objects/a7/b66e93f0b660e3276ebb568a96b57866006ef4": "adc73640f1272609176ba5e0de6e7d9e",
".git/objects/a8/bc1bd7807efe427fecf1915ba23eafa27d428b": "08c1ab0e4da5f355e1c75851055d0d46",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/79cdf3d935e0e6a23fc184ecfb344144c175c3": "4aca196c2b5ac7f1dfbe1463fa5f215e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/ae7662b4fc59bb590b2455b0c88f3216cebe68": "e0a531a5b95dc174188b0d586eb34905",
".git/objects/bf/5665a4819e395a014fdc52cefb5f1ad57a5a02": "9e5cd7db2cd9ec131f592c3da71db517",
".git/objects/c2/a710d95e0f89f2f03e329029e008c18a2477af": "26b477decc98dbb4a6724ff0af121b77",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d0/9cfe4ca0531befd79c0862c0ba3a56b05b055b": "88575bb3961065a217dd664ed0acef93",
".git/objects/d2/aabde576273bbe005a4750f5254f5f4df76c22": "f86185d7b42f8963756cdcb537e75fa0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/80968cb9059b371632860856f23d04cbd0b44f": "d6ba6b8c8994593f8d6a016e522835ec",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/2ba257b806973f4c2294e323280bdf4286f4d7": "1d7fcd58ade9f3b6d954fd54eaf961ec",
".git/objects/eb/6cdd3bc50750573059ff675349dacd55583738": "c4bfe5157040b4407e416db685108038",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fd/47f04f2f182af35fce05835a33d080b6f58704": "eb43c41fcd7cfdc0e34ed7981f65556c",
".git/ORIG_HEAD": "aa3298a5c63ecf02895f85f4bc83b67e",
".git/refs/heads/master": "aa3298a5c63ecf02895f85f4bc83b67e",
".git/refs/remotes/origin/master": "7e94b989e84d1fdb344ac4a8f817768d",
"assets/AssetManifest.bin": "8b4aac2a0a6d2bb167faffe5aacae90e",
"assets/AssetManifest.bin.json": "6476b01ea1ecd61c648ff0277b94649c",
"assets/AssetManifest.json": "cd2b3af80bd07694f3e649e8d64ea539",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6a28312d9d0c84c9defc9eb7b0c7a0b4",
"assets/NOTICES": "a11a9d9180e1ad6ec88545b21b81b0e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/speedometer_chart/assets/arc.svg": "f6372b785f71d8b428b802fa9ded9174",
"assets/packages/speedometer_chart/assets/arc_tick_1.svg": "9f0c1da01cbe2b6119cc3f6b97eed2b6",
"assets/packages/speedometer_chart/assets/arc_tick_2.svg": "aaf86d5813cdaeaf7154b07f2dd75837",
"assets/packages/speedometer_chart/assets/pointer.svg": "c2f3bd10483ee3f93f828f1bc90185d3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "02d1d2c78e0cc9f5c0ad7b4d06277a71",
"/": "02d1d2c78e0cc9f5c0ad7b4d06277a71",
"main.dart.js": "f25307005b1a59168d6f407ad22386a5",
"manifest.json": "1fbe4ecaec4e993e69e93360e1ff8ff9",
"README.md": "aec8634084ff3ff6c6a86c9bf7d336a4",
"version.json": "edffdb8946126cf515ce891966576ba8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

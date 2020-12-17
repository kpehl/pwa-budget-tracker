const FILES_TO_CACHE = [
    "./index.html",
    "./css/styles.css",
    "./js/index.js",
    "./js/idb.js",
    "./icons/icon-72x72.png", "./icons/icon-96x96.png",
    "./icons/icon-128x128.png", "./icons/icon-144x144.png",
    "./icons/icon-152x152.png", "./icons/icon-192x192.png",
    "./icons/icon-384x384.png","./icons/icon-512x512.png"
  ];

const APP_PREFIX = 'Budget-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

  self.addEventListener('install', function (e) {
    e.waitUntil(
      caches.open(CACHE_NAME).then(function (cache) {
        console.log('installing cache : ' + CACHE_NAME)
        return cache.addAll(FILES_TO_CACHE)
      })
    )
  })

  self.addEventListener('activate', function(e) {
    e.waitUntil(
      caches.keys().then(function(keyList) {
        let cacheKeeplist = keyList.filter(function(key) {
          return key.indexOf(APP_PREFIX);
        });
        cacheKeeplist.push(CACHE_NAME);
  
        return Promise.all(
          keyList.map(function(key, i) {
            if (cacheKeeplist.indexOf(key) === -1) {
              console.log('deleting cache : ' + keyList[i]);
              return caches.delete(keyList[i]);
            }
          })
        );
      })
    );
  });

self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        return resp || fetch(event.request)
        // .then((response) => {
        //   let responseClone = response.clone();
        //   caches.open(CACHE_NAME).then((cache) => {
        //     cache.put(event.request, responseClone);
        //   });
  
        //   return response;
        // })
        .catch(() => {
          return caches.match('./index.html');
        })
    })
  );
});
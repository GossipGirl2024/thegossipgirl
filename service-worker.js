self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('gossip-cache').then((cache) => {
      return cache.addAll([
        '/repository-name/',
        '/repository-name/index.html',
        '/repository-name/styles.css',
        '/repository-name/script.js',
        '/repository-name/icon-192.png',
        '/repository-name/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

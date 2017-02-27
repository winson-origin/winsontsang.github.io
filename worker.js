'use strict';

this.addEventListener('install', function (event) {
  event.waitUntil(caches.open('v1').then(function (cache) {
    return cache.addAll([
      '/',
      '/index.html'
    ]);
  }));
});

this.addEventListener('fetch', function(event) {
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(event.request.url).catch( function(error) {
          return caches.match(offlineUrl);
      })
    );
  }
  else{
    event.respondWith( caches.match(event.request)
      .then(function (response) {
          return response || fetch(event.request);
      })
    );
  }
});

const CACHE_NAME = `profile-v1`;

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll([
            '/',
            'assets/styles/app.css',
            'assets/scripts/script.js'
        ]);
    })());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).then(res => {
            const resClone = res.clone();
            caches.open(CACHE_NAME).then(cache => {
                // Only cache requests that start with http
                if (event.request.url.startsWith('http')) {
                    cache.put(event.request, resClone);
                }
            });
            return res;
        }).catch(err => caches.match(event.request).then(res => res))
    );
});
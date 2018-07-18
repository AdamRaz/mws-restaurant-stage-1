self.addEventListener('install', function(event) {
    //...do stuff
    console.log('Installing Event!');
    event.waitUntil(
        // console.log('Caching');

        caches.open('restaurant-app-cache').then(function(cache) {
            return cache.addAll([
                // could just reference an array declared elsewhere
                '/js/main.js',
                '/css/styles.css',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',

                // 'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
                // '//normalize-css.googlecode.com/svn/trunk/normalize.css',
                // 'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
                // 'data/restaurants.json'

            ]);
        }).catch(function(error) {
            console.log(error);
        })
    );

});

self.addEventListener('activate', function(event) {
    //...do stuff
    console.log('Activate Event!');

});


self.addEventListener('fetch', function(event) {
    console.log('Fetch Event!');

    event.respondWith(
        caches.match(event.request).then(function(response) {
            console.log('Responding to Fetch Event!');
            // console.log(`event.request: ${event.request}`);
            // console.log(`response: ${response}`);

            if (response) return response;
            // if exists in cache, return that, else return original fetch and request
            return fetch(event.request);
        })
    );
});
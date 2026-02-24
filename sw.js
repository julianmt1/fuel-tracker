const CACHE_NAME = 'fuel-tracker-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icon.svg',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js',
    'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
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

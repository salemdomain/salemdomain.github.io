/*
 * SalemDomain MobileTech — Service Worker
 * Caches the core pages on first visit so the site keeps working offline
 * or on a flaky connection. Bump CACHE_NAME whenever page content changes
 * so visitors get the fresh version instead of a stale cached copy.
 */

const CACHE_NAME = 'salemdomain-cache-v11';

const CORE_ASSETS = [
  '/',
  '/terms',
  '/privacy',
  '/coming-soon',
  '/favicon.webp',
  '/favicon.png',
  '/og-image.jpg',
];

// Install: pre-cache the core pages.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old cache versions.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first for HTML (so visitors get updates when online),
// falling back to cache when offline. Cache-first for everything else.
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests from this origin.
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) {
    return;
  }

  const isHTML = request.mode === 'navigate' ||
    (request.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match('/'))
        )
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      }).catch(() => cached);
    })
  );
});

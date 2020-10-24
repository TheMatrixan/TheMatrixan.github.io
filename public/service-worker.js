importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js');

if (workbox) {
  const CACHE_NAME_IMAGES = 'images';
  const CACHE_NAME_ROUTES = 'routes';

  const EXPIRATION_30_DAYS = 30 * 24 * 60 * 60;

  self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  workbox.core.clientsClaim();
  // workbox.navigationPreload.enable();
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

  // Cache route info.
  workbox.routing.registerRoute(
    ({ url }) => url.origin === location.origin && /^\/.+?\routeInfo.json$/.test(url.pathname),
    new workbox.strategies.CacheFirst({
      cacheName: CACHE_NAME_ROUTES,
      plugins: [new workbox.expiration.ExpirationPlugin({ maxAgeSeconds: EXPIRATION_30_DAYS })],
    }),
  );

  // Cache local images.
  workbox.routing.registerRoute(
    ({ url }) => url.origin === location.origin && /^\/.+?\.(?:avif|ico|jpg|jpeg|webp|png|svg)$/.test(url.pathname),
    new workbox.strategies.CacheFirst({
      cacheName: CACHE_NAME_IMAGES,
      plugins: [new workbox.expiration.ExpirationPlugin({ maxAgeSeconds: EXPIRATION_30_DAYS })],
    }),
  );
} else {
  console.log(`Workbox didn't load`);
}

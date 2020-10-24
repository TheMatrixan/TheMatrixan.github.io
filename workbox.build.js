const workboxBuild = require('workbox-build');

const buildSW = () => {
  return workboxBuild
    .injectManifest({
      swSrc: 'public/service-worker.js',
      swDest: 'dist/service-worker.js',
      globDirectory: 'dist',
      globPatterns: ['**/*.{js,css,woff2,ico}'],
    })
    .then(({ count, size, warnings }) => {
      warnings.forEach(console.warn);
      console.log(`${count} files will be precached, totaling ${(size / 1024).toFixed(2)} KB.`);
    });
};

buildSW();

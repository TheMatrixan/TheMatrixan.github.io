import path from 'path';

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => [
    {
      path: '/',
      template: 'src/pages',
    },
    {
      path: '404',
      template: 'src/pages/404.tsx',
    },
  ],
  inlineCss: true,
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-sass',
    require.resolve('react-static-plugin-react-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
};

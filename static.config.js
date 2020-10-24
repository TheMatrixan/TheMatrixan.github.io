import path from 'path';
import { ORIGIN, LANGUAGES, BASE_LANGUAGE } from './src/config/config';

const generateRoute = (name, langKey, basePath) => {
  const lowerName = name.toLowerCase();
  return {
    getData: () => ({
      lang: LANGUAGES[langKey],
      meta: {
        title: `meta.${lowerName}.title`,
      },
    }),
    path: `${basePath}${lowerName}/`,
    template: `src/modules/pages/${lowerName}/${name}.page.tsx`,
  };
};

export default {
  basePath: '/',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const routes = Object.keys(LANGUAGES)
      .map((langKey) => {
        const basePath = BASE_LANGUAGE === LANGUAGES[langKey] ? '/' : `/${LANGUAGES[langKey]}/`;

        return [
          {
            getData: () => ({
              lang: LANGUAGES[langKey],
            }),
            path: basePath,
            template: 'src/modules/pages/home/Home.page.tsx',
          },
          generateRoute('Resume', langKey, basePath),
          generateRoute('Portfolio', langKey, basePath),
        ];
      })
      .reduce((a, b) => a.concat(b), []);

    return [
      ...routes,
      {
        path: '404',
        template: 'src/modules/pages/notFound/NotFound.page.tsx',
      },
    ];
  },
  inlineCss: true,
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-sass',
    'react-static-plugin-reach-router',
    'react-static-plugin-sitemap',
  ],
  productionSourceMaps: false,
  siteRoot: ORIGIN,
};

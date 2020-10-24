import { getLocalIdent } from 'css-loader/dist/utils';

const webpackNodeApiConfig = (config, { stage }) => {
  const loaders = [
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 2,
        localIdentName: '[name]-[local]_[hash:base64:4]',
        getLocalIdent: (context, localIdentName, localName, options) =>
          context.resourcePath.includes('/node_modules/')
            ? localName
            : getLocalIdent(context, localIdentName, localName, options),
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins() {
          return [require('autoprefixer')({ flexbox: 'true' })];
        },
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        includePaths: ['src/'],
      },
    },
  ];

  const scssModules = {
    test: /module\.scss$/,
    use: stage === 'node' ? loaders : [{ loader: 'style-loader' }, ...loaders],
  };

  config.module.rules[0].oneOf.unshift(scssModules);

  return config;
};

export default webpackNodeApiConfig;

import cheerio from 'cheerio';
import webpack from './node.api.webpack';

export default () => ({
  webpack,
  beforeDocumentToFile: (html) => {
    const $ = cheerio.load(html);

    $('head').prepend(`<!-- Build date: ${new Date().toUTCString()}+0 -->`);
    $('head meta[charset="UTF-8"]:not([name])').remove();
    $('head meta[name="generator"]').remove();
    $('head').prepend('<meta charset="UTF-8">');

    return $.html();
  },
});

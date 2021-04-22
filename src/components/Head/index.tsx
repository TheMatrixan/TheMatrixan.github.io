import { ORIGIN } from 'config';
import React, { VoidFunctionComponent } from 'react';
import { Head as HelmetHead } from 'react-static';

const locale = 'en';
const title = 'Mateusz Lesiak - Software Engineer';
const description =
  'I am a software engineer from Lodz who specializes in building (and sometimes designing) high-quality websites and applications using React in TypeScript.';
const author = 'Mateusz Lesiak';
const image = `${ORIGIN}/mateusz_lesiak@2x.jpg`;

const Head: VoidFunctionComponent = () => (
  <HelmetHead>
    <html lang={locale} />

    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
    <meta name="robots" content="follow" />
    <meta name="author" content={author} />
    <meta name="copyright" content={author} />

    <link rel="preconnect dns-prefetch" href="https://fonts.googleapis.com" />
    <link rel="preconnect dns-prefetch" href="https://www.google-analytics.com" />
    <link rel="preconnect dns-prefetch" href="https://www.googletagmanager.com" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={author} />
    <meta property="og:locale" content={locale} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content={title} />

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b7a26d" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
  </HelmetHead>
);

export default Head;

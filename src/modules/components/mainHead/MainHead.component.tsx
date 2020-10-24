import { LANGUAGES, ORIGIN } from '@config/config';
import createCanonicalURL from '@helpers/createCanonicalURL';
import normalizePathname from '@helpers/normalizePathname';
import { useLocation } from '@reach/router';
import React, { memo, Fragment } from 'react';
import { useIntl } from 'react-intl';
import { Head, useRouteData } from 'react-static';

const MainHead: React.FC = memo(() => {
  const { pathname } = useLocation();
  const canonical = createCanonicalURL(pathname);

  const { formatMessage, locale } = useIntl();
  const { meta } = useRouteData<IBaseRouteData>();
  const author = formatMessage({ id: 'author' });
  const title = formatMessage({ id: meta?.title || 'meta.web.title' });
  const description = formatMessage({ id: meta?.description || 'meta.web.description' });
  const image = `${ORIGIN}/assets/images/mateusz_lesiak@2x.jpg`;

  return (
    <Fragment>
      <Head>
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
        {canonical && <meta property="twitter:url" content={canonical} />}

        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={author} />
        <meta property="og:locale" content={locale} />
        {canonical && <meta property="og:url" content={canonical} />}
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

        {canonical && <link rel="canonical" href={canonical} />}
        {Object.values(LANGUAGES).map(
          (lang) =>
            lang !== locale && (
              <link
                key={lang}
                rel="alternate"
                href={createCanonicalURL(normalizePathname(pathname, locale as LanguageValues, lang))}
                hrefLang={lang}
              />
            ),
        )}
      </Head>
    </Fragment>
  );
});

export default MainHead;

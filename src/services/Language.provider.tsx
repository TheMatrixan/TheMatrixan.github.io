import { DEFAULT_LANGUAGE, LANGUAGES } from '@config/config';
import { getUserLanguage } from '@helpers/language';
import normalizePathname from '@helpers/normalizePathname';
import setCookieValue from '@helpers/setCookieValue';
import messagesEN from '@languages/en.json';
import messagesPL from '@languages/pl.json';
import { navigate, useLocation } from '@reach/router';
import React, { memo, useEffect, useLayoutEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { useRouteData } from 'react-static';

const messages: { [key in LanguageValues]: { [key: string]: string } } = {
  [LANGUAGES.POLISH]: messagesPL,
  [LANGUAGES.ENGLISH]: messagesEN,
};

const LanguageProvider: React.FC = memo(({ children }) => {
  const userLang = getUserLanguage();
  const { lang: routeLang = userLang } = useRouteData<IBaseRouteData>();
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (userLang !== routeLang) {
      const shouldRedirect = userLang !== routeLang;
      if (shouldRedirect) {
        const newPathname = normalizePathname(pathname, routeLang, userLang);
        navigate(newPathname);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCookieValue('lang', routeLang);
  }, [routeLang]);

  return (
    <IntlProvider locale={routeLang} messages={messages[routeLang]} defaultLocale={DEFAULT_LANGUAGE}>
      {children}
    </IntlProvider>
  );
});

export default LanguageProvider;

import { DEFAULT_LANGUAGE, LANGUAGES } from '@config/config';

import getCookieValue from './getCookieValue';

export const getUserLanguage = (): LanguageValues => {
  const cookieLang = getCookieValue<LanguageValues>('lang');
  if (cookieLang && isPassedLangIsAvailable(cookieLang)) {
    return cookieLang;
  }

  if (typeof window !== 'undefined') {
    const browserLang = window.navigator.language.split(/[-_]/)[0] as LanguageValues;
    if (browserLang && isPassedLangIsAvailable(browserLang)) {
      return browserLang;
    }
  }

  return DEFAULT_LANGUAGE;
};

const isPassedLangIsAvailable = (lang: LanguageValues): boolean => Object.values(LANGUAGES).includes(lang);

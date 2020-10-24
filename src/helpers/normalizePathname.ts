import { BASE_LANGUAGE } from '@config/config';

const normalizePathname = (pathname: string, currentLang: LanguageValues, destinationLang: LanguageValues): string => {
  if (currentLang === BASE_LANGUAGE) {
    return destinationLang === BASE_LANGUAGE ? pathname : `/${destinationLang}${pathname}`;
  }

  return `${pathname.replace(`/${currentLang}/`, destinationLang === BASE_LANGUAGE ? '/' : `/${destinationLang}/`)}`;
};

export default normalizePathname;

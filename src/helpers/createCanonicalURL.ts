import { ORIGIN } from '@config/config';

const createCanonicalURL = (pathname: string): string => {
  if (pathname) {
    return pathname.slice(-1) === '/' ? `${ORIGIN}${pathname}` : `${ORIGIN}${pathname}/`;
  }

  return '';
};

export default createCanonicalURL;

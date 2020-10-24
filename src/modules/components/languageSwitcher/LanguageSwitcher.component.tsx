import Link from '@components/link/Link.component';
import { LANGUAGES } from '@config/config';
import normalizePathname from '@helpers/normalizePathname';
import setCookieValue from '@helpers/setCookieValue';
import { useLocation } from '@reach/router';
import clsx from 'clsx';
import React, { memo, useCallback } from 'react';
import { useIntl } from 'react-intl';

import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher: React.FC = memo(() => {
  const { pathname } = useLocation();
  const { formatMessage, locale } = useIntl();

  const changeLang = useCallback(
    (language: LanguageValues) => (): void => {
      setCookieValue('lang', language);
    },
    [],
  );

  return (
    <div className={styles['switchers']}>
      {Object.values(LANGUAGES).map((lang: LanguageValues) => (
        <Link
          className={clsx(styles['btn-lang'], { [styles['active']]: locale === lang })}
          key={lang}
          lang={lang}
          to={normalizePathname(pathname, locale as LanguageValues, lang)}
          title={formatMessage({ id: `lang.${lang}` })}
          onClick={changeLang(lang)}>
          {lang}
        </Link>
      ))}
    </div>
  );
});

export default LanguageSwitcher;

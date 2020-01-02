import React, { MouseEvent, useContext } from 'react';
import { useIntl } from 'react-intl';
import cn from 'classnames';

import { changeLanguage } from 'store/language/actions';
import { Language } from 'store/language/types';
import { Languages } from 'languages';
import { LanguageContext } from 'hocs/LanguageProvider/LanguageProvider.hoc';

import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher: React.FC = () => {
  const { state, dispatch } = useContext(LanguageContext);
  const { formatMessage } = useIntl();
  const changeLang = (language: Language) => (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    dispatch(changeLanguage({ language }));
  };

  return (
    <div className={styles['switchers']}>
      {Object.keys(Languages).map(lang => (
        <button
          className={cn(styles['btn-lang'], { [styles['active']]: state.language === Languages[lang] })}
          key={lang}
          title={formatMessage({ id: `lang.${Languages[lang]}` })}
          onClick={changeLang(Languages[lang])}
        >
          {Languages[lang]}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

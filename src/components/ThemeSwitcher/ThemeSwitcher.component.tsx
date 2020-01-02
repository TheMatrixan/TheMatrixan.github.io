import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useIntl } from 'react-intl';

import { Themes, setTheme, getTheme } from 'config';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher: React.FC = () => {
  const { formatMessage } = useIntl();
  const [checked, setChecked] = useState<boolean>(getTheme() === Themes.Dark ? true : false);
  useEffect(() => {
    document.getElementsByTagName('HTML')[0].setAttribute('data-theme', getTheme());
  }, [checked]);

  const toggleThemeChange = (): void => {
    if (checked === false) {
      setTheme(Themes.Dark);
      setChecked(true);
    } else {
      setTheme(Themes.Light);
      setChecked(false);
    }
  };

  return (
    <div className={styles['toggle-wrapper']}>
      <input
        className={styles['input']}
        id="theme-switch"
        type="checkbox"
        defaultChecked={checked}
        onChange={toggleThemeChange}
      />
      <label className={styles['toggle']} htmlFor="theme-switch" title={formatMessage({ id: 'theme.change' })}>
        <span className={styles['toggle__handler']}>
          <span className={cn(styles['crater'], styles['crater--1'])}></span>
          <span className={cn(styles['crater'], styles['crater--2'])}></span>
          <span className={cn(styles['crater'], styles['crater--3'])}></span>
        </span>
        <span className={cn(styles['star'], styles['star--1'])}></span>
        <span className={cn(styles['star'], styles['star--2'])}></span>
        <span className={cn(styles['star'], styles['star--3'])}></span>
        <span className={cn(styles['star'], styles['star--4'])}></span>
        <span className={cn(styles['star'], styles['star--5'])}></span>
        <span className={cn(styles['star'], styles['star--6'])}></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;

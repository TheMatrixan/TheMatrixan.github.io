import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import LanguageSwitcher from 'components/LanguageSwitcher';
import ThemeSwitcher from 'components/ThemeSwitcher';
import { navigation } from 'config';
import logo from 'assets/img/logo.svg';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <header className="container">
      <div className={styles['navbar']}>
        <div className={styles['navbar-logo']}>
          <Link to="/">
            <img className={styles['logo']} src={logo} alt={formatMessage({ id: 'header.logo' })} />
          </Link>
        </div>
        <div className="navbar-top">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
        <div className={styles['navbar-menu-wrapper']}>
          <ul className={styles['navbar-menu']}>
            {navigation.map(({ path, name, enhance = false }, index) => (
              <li key={path} className={enhance ? styles['navbar-item-enhance'] : styles['navbar-item']}>
                <span className={styles['navbar-item-index']}>{String(index + 1).padStart(2, '0')}.</span>
                <Link to={path} className={styles['navbar-item-link']}>
                  <FormattedMessage id={name} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

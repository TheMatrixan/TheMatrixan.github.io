import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';

import LanguageSwitcher from 'components/LanguageSwitcher';
// import ThemeSwitcher from 'components/ThemeSwitcher';
import Hexagon from 'components/Hexagon';

import { navigation } from 'config';
import logo from 'assets/img/logo.svg';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { formatMessage } = useIntl();
  const [menuToggled, setMenuToggled] = useState<boolean>(false);
  const toggleMenu = (): void => {
    setMenuToggled(!menuToggled);
  };
  return (
    <>
      <header className={cn(styles['header'])}>
        <div className="container">
          <div className={styles['navbar']}>
            <div className={styles['navbar-logo']}>
              <Link to="/" title="Mateusz Lesiak">
                <img className={styles['logo']} src={logo} alt={formatMessage({ id: 'header.logo' })} />
              </Link>
            </div>
            <div className={cn(styles['navbar-top'], { [styles['mobile']]: menuToggled })}>
              <LanguageSwitcher />
              {/* TODO: Add Theme
               <ThemeSwitcher /> */}
            </div>
            <ul className={cn(styles['navbar-menu'], { [styles['mobile']]: menuToggled })}>
              {navigation.map(({ path, name, enhance = false }, index) => (
                <li
                  key={path}
                  className={styles['navbar-item']}
                  style={{ animationDelay: `${index * 100 + 700}ms` }}
                  onClick={toggleMenu}
                >
                  <NavLink to={path} className={styles['navbar-item-link']} activeClassName={styles['active']}>
                    <FormattedMessage id={name} />
                  </NavLink>
                  {enhance ? <span className={styles['navbar-item-enhance']}></span> : null}
                  <span className={cn(styles['navbar-item-index'], { [styles['enhance']]: enhance })}>
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                </li>
              ))}
            </ul>
            <div className={cn(styles['navbar-toggle'], { [styles['mobile']]: menuToggled })}>
              <button type="button" onClick={toggleMenu} className={styles['btn-toggle']}>
                <span className="sr-only">
                  <FormattedMessage id="button.menu.toggle" />
                </span>
                <span className={cn(styles['menu'], { [styles['mobile']]: menuToggled })}></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="hexagons">
        <div className="container relative">
          <Hexagon className={styles['hex-menu']} />
        </div>
      </div>
    </>
  );
};

export default Header;

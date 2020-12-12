import Hexagon from '@components/hexagon/Hexagon.component';
import LanguageSwitcher from '@components/languageSwitcher/LanguageSwitcher.component';
import Link from '@components/link/Link.component';
import { navigation } from '@config/config';
import clsx from 'clsx';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

// import ThemeSwitcher from 'components/ThemeSwitcher';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { formatMessage } = useIntl();
  const [menuToggled, setMenuToggled] = useState<boolean>(false);

  const toggleMenu = (): void => setMenuToggled(!menuToggled);

  return (
    <>
      <header className={clsx(styles['header'])}>
        <div className="container">
          <div className={styles['navbar']}>
            <div className={styles['navbar-logo']}>
              <Link to="./" title="Mateusz Lesiak">
                <img
                  className={styles['logo']}
                  src="/assets/images/logo.svg"
                  alt={formatMessage({ id: 'header.logo' })}
                />
              </Link>
            </div>
            <div className={clsx(styles['navbar-top'], { [styles['mobile']]: menuToggled })}>
              <LanguageSwitcher />
              {/* TODO: Add Theme
               <ThemeSwitcher /> */}
            </div>
            <ul className={clsx(styles['navbar-menu'], { [styles['mobile']]: menuToggled })}>
              {navigation.map(({ path, name, enhance = false }, index) => (
                <li key={path} className={styles['navbar-item']} onClick={toggleMenu}>
                  <Link to={path} className={styles['navbar-item-link']} activeClassName={styles['active']}>
                    <FormattedMessage id={name} />
                  </Link>
                  {enhance ? <span className={styles['navbar-item-enhance']}></span> : null}
                  <span className={clsx(styles['navbar-item-index'], { [styles['enhance']]: enhance })}>
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                </li>
              ))}
            </ul>
            <div className={clsx(styles['navbar-toggle'], { [styles['mobile']]: menuToggled })}>
              <button type="button" onClick={toggleMenu} className={styles['btn-toggle']}>
                <span className="sr-only">
                  <FormattedMessage id="button.menu.toggle" />
                </span>
                <span className={clsx(styles['menu'], { [styles['mobile']]: menuToggled })}></span>
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

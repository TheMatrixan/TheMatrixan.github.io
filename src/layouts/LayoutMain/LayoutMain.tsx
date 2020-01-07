import React, { useEffect, Suspense } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import styles from './LayoutMain.module.scss';

interface LayoutMainProps {
  children: React.ReactNode;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children }: LayoutMainProps) => {
  useEffect(() => {
    // const isInStandaloneMode =
    //   window.matchMedia('(display-mode: standalone)').matches ||
    //   window.navigator['standalone'] ||
    //   document.referrer.includes('android-app://');

    const pageLoadTime = Date.now() - window.performance.timing.navigationStart;
    const loaderTimeout = pageLoadTime > 1500 ? pageLoadTime - 1500 : 1500;
    const pageTimeout = 1100;
    const addClassLoadedTimeout = setTimeout(() => {
      document.body.classList.add('loader-loaded');
      setTimeout(() => {
        document.body.classList.add('page-loaded');
        document.getElementById('loader')?.remove();
      }, pageTimeout);
    }, loaderTimeout);

    return (): void => {
      clearTimeout(addClassLoadedTimeout);
    };
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback="TODO: Loading...">
        <main className={styles['main']}>{children}</main>
      </Suspense>
      <Footer />
    </>
  );
};

export default LayoutMain;

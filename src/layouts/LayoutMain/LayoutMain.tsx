import React, { useEffect, Suspense } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

interface LayoutMainProps {
  children: React.ReactNode;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children }: LayoutMainProps) => {
  useEffect(() => {
    const pageLoadTime = Date.now() - window.performance.timing.navigationStart;
    const timeout = pageLoadTime > 1500 ? pageLoadTime - 1500 : 1500;
    const addClassLoadedTimeout = setTimeout(() => {
      document.body.classList.add('loaded');
    }, timeout);

    return (): void => {
      clearTimeout(addClassLoadedTimeout);
    };
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback="TODO: Loading...">
        <main>{children}</main>
      </Suspense>
      <Footer />
    </>
  );
};

export default LayoutMain;

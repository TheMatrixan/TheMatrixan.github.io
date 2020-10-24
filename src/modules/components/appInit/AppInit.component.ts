import fireGAEvent from '@helpers/fireGAEvent';
import { useLocation } from '@reach/router';
import { useEffect } from 'react';

const AppInit = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ behavior: 'smooth', left: 0, top: 0 });
      // TODO:
      fireGAEvent('page-view', { pathname });
    });
  }, [pathname]);

  useEffect(() => {
    const appHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    appHeight();
    window.addEventListener('resize', appHeight);

    return () => {
      window.removeEventListener('resize', appHeight);
    };
  }, []);

  return null;
};

export default AppInit;

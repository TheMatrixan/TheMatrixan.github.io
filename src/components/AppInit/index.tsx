import { useEffect, VoidFunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';

import fireGAEvent from 'utils/fireGAEvent';

const AppInit: VoidFunctionComponent = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ behavior: 'smooth', left: 0, top: 0 });
      fireGAEvent('page-view', { pathname });
    });
  }, [pathname]);

  return null;
};

export default AppInit;

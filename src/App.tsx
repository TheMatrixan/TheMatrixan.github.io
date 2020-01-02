import React from 'react';

import LanguageProvider from './hocs/LanguageProvider';
import Router from './hocs/Router';

import './assets/styles/styles.scss';

// TODO: Delete.
if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
  whyDidYouRender(React);
}

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router />
    </LanguageProvider>
  );
};

export default App;

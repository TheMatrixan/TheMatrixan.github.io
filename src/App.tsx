import React, { VoidFunctionComponent } from 'react';
import { Switch } from 'react-router-dom';
import { Root, Routes } from 'react-static';

import AppInit from 'components/AppInit';
import GoogleAnalytics from 'components/GoogleAnalytics';
import Head from 'components/Head';

import './assets/styles/main.scss';

const Loader = null;

const App: VoidFunctionComponent = () => (
  <Root>
    <React.Suspense fallback={Loader}>
      <Switch>
        <Routes path="*" />
        <AppInit />
      </Switch>
      <Head />
      <GoogleAnalytics />
    </React.Suspense>
  </Root>
);

export default App;

import AppInit from '@components/appInit/AppInit.component';
import Footer from '@components/footer/Footer.component';
import GoogleAnalytics from '@components/googleAnalytics/GoogleAnalytics.component';
import Header from '@components/header/Header.component';
import MainHead from '@components/mainHead/MainHead.component';
import activatePWA from '@helpers/activatePWA';
import NotFound from '@pages/notFound/NotFound.page';
import { Router } from '@reach/router';
import LanguageProvider from '@services/Language.provider';
import BreadcrumbsStructuredData from '@structuredData/breadcrumb/Breadcrumbs.structuredData';
import React from 'react';
import { Root, Routes } from 'react-static';

import '@scss/main.scss';

const App = (): JSX.Element => (
  <Root>
    <React.Suspense fallback={null}>
      <AppInit />
      <Router>
        <Routes
          path="*"
          render={({ routePath, getComponentForPath }) => {
            const component = getComponentForPath(routePath);

            return (
              <LanguageProvider>
                <MainHead />
                <Header />
                <main>{component || <NotFound />}</main>
                <Footer />
                <BreadcrumbsStructuredData />
              </LanguageProvider>
            );
          }}
        />
      </Router>
      <GoogleAnalytics />
    </React.Suspense>
  </Root>
);

if (process.env.NODE_ENV !== 'development') {
  activatePWA();
}

export default App;

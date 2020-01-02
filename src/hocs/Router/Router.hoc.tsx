import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LayoutMain from 'layouts/LayoutMain';
import { routes } from 'config';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route
        path="/"
        render={(): object => (
          <LayoutMain>
            <Switch>
              {routes.map(({ path, component }) => (
                <Route component={component} path={path} key={path} exact />
              ))}
            </Switch>
          </LayoutMain>
        )}
      />
    </BrowserRouter>
  );
};

export default Router;

import React, { VoidFunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import * as serviceWorker from './service-worker-init';

export default App;

if (typeof document !== 'undefined') {
  const target = document.getElementById('root');

  const renderMethod = target?.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

  const render = (Comp: VoidFunctionComponent) => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      target,
    );
  };

  render(App);

  module?.hot?.accept('./App', () => {
    render(App);
  });
}

if (typeof document !== 'undefined') {
  serviceWorker.register();
}

import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './app/config/store';

// import store from './app/config/store';

import Routes from './app/components/main/main';
import ErrorBoundary from './app/components/ErrorBoundary/ErrorBoundary';

const store = configureStore();

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
          <Routes />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;

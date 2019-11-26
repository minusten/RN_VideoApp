import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './app/config/store';

import { Root } from "native-base";

import Routes from './app/components/main/main';
import ErrorBoundary from './app/components/ErrorBoundary/ErrorBoundary';
import MainContainer from './app/components/main/container';

const store = configureStore();

const App = () => {
  return (
    <Root>
    <ErrorBoundary>
      <Provider store={store}>
          <MainContainer />
      </Provider>
    </ErrorBoundary>
    </Root>
  );
};

export default App;

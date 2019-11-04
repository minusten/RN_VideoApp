import React from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from './app/components/ErrorBoundary/ErrorBoundary';
import Routes from './app/components/main/main';
import { persistor, store } from './app/config/store';

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

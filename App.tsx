import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorBoundary from './app/components/ErrorBoundary/ErrorBoundary';
import Routes from './app/components/main/main';
import { persistor, store } from './app/config/store';

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;

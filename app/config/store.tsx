import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import devToolsEnhancer from 'remote-redux-devtools';
import reducers from '../reducers';

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    reducers,
    devToolsEnhancer(middleWareEnhancer)
  );

  return store;
}
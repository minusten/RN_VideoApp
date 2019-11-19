import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import devToolsEnhancer from 'remote-redux-devtools';
import reducers from '../reducers';

import userReducer from '../reducers/userReducer';
import playlistReducer from '../reducers/playlistReducer';

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    // userReducer,
    // playlistReducer,
    reducers,
    devToolsEnhancer(middleWareEnhancer)
  );

  return store;
}
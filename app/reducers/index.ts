import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

import devToolsEnhancer from 'remote-redux-devtools';

import  userReducer from './userReducer';

// const rootReducer = combineReducers({
//     userReducer,
// });

// export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);
  
    const store = createStore(
        userReducer,
        devToolsEnhancer(middleWareEnhancer)
    );
  
    return store;
  }

// import { createStore, applyMiddleware } from 'redux';
// import  userReducer  from './userReducer';


// const store = createStore(userReducer);

// export type AppState = ReturnType<typeof userReducer>;

// export default store;
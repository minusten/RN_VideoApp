import { combineReducers } from 'redux';

//Reducers
import userReducer from './userReducer';
import playlistReducer from './playlistReducer';
import favoritesReducer from './favoritesReducer';

export default combineReducers({
    userReducer,
    playlistReducer,
    favoritesReducer,
});

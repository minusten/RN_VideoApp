import { combineReducers } from 'redux';

//Reducers
import userReducer from './userReducer';
import playlistReducer from './playlistReducer';
import favoritesReducer from './favoritesReducer';
import photoReducer from './photoReducer';

export default combineReducers({
    userReducer,
    playlistReducer,
    favoritesReducer,
    photoReducer,
});

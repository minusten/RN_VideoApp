import { combineReducers } from 'redux';

//Reducers
import  userReducer from './userReducer';
import playlistReducer from './playlistReducer';

export default combineReducers({
    userReducer,
    playlistReducer,
});

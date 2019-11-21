import { ADD_FAVORITES } from '../actions/types';

const initialState = {
    favorites: [],
};

 const favoritesReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                favorites: action.payload,
                // username: [...state, action.payload],
            };
            // case REMOVE_PLAYLIST: 
            // return {
            //     playlist: state.playlist.filter((playlist, index) => {
            //         return action.id !== index;
            //       }),
            // };
        default:
            return state;
    }
};

export default favoritesReducer;
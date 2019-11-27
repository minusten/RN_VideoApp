import { ADD_FAVORITES, REMOVE_FAVORITE } from '../actions/types';

const initialState = {
    favorites: [],
};

 const favoritesReducer = (state = initialState, action: { type: any; payload: any; id: number;}) => {
    switch (action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                favorites: action.payload,
             
            };
        case REMOVE_FAVORITE:
            return {
                 favorites: state.favorites.filter((fav, index) => {
                    return action.id !== index;
                }),
            };
        default:
            return state;
    }
};

export default favoritesReducer;

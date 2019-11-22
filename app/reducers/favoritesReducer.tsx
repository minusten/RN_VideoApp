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
                // favorites: [state, action.payload],
            };
        default:
            return state;
    }
};

export default favoritesReducer;
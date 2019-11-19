import { ADD_PLAYLIST } from '../actions/types';

const initialState = {
    playlist: [],
};

 const playlistReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case ADD_PLAYLIST:
            return {
                ...state,
                playlist: action.payload,
                // playlist: [...state, action.payload],
            };
        default:
            return state;
    }
};

export default playlistReducer;
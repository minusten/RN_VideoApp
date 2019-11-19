import { ADD_PLAYLIST, REMOVE_PLAYLIST } from '../actions/types';

const initialState = {
    playlist: [],
};

 const playlistReducer = (state = initialState, action: { type: any; payload: any; id: number; }) => {
    switch (action.type) {
        case ADD_PLAYLIST:
            return {
                ...state,
                playlist: action.payload,
                // playlist: [...state, action.payload],
            };
        case REMOVE_PLAYLIST: 
            return {
                playlist: state.playlist.filter((playlist, index) => {
                    return action.id !== index;
                  }),
            };
        default:
            return state;
    }
};

export default playlistReducer;
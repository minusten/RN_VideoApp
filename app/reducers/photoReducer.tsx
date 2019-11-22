import { ADD_GOOGLEPHOTO } from '../actions/types';

const initialState = {
    photo: '',
};

 const photoReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case ADD_GOOGLEPHOTO:
            return {
                ...state,
                photo: action.payload,
            };
        default:
            return state;
    }
};

export default photoReducer;
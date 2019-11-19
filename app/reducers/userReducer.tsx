import { ADD_USERNAME } from '../actions/types';

const initialState = {
    username: '',
};

 const userReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case ADD_USERNAME:
            return {
                ...state,
                username: action.payload,
                // username: [...state, action.payload],
            };
        default:
            return state;
    }
};

export default userReducer;
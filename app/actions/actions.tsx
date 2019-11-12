import * as actionTypes from './types';

export const addUserName = (username: any) => {
  return {
    type: actionTypes.ADD_USERNAME,
    payload: username,
  };
};

// import { UserState, UserActionTypes, ADD_USERNAME } from './types';

// export function addUserName(newUsername: UserState) {
//     return {
//         type: ADD_USERNAME,
//         payload: newUsername,
//     };
// }
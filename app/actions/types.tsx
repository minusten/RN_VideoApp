export interface User {
    username: string;
}

export interface UserState {
    usernames: User[];
}

export const ADD_USERNAME = 'ADD_USERNAME';
export const DELETE_USERNAME = 'DELETE_USERNAME';

// interface AddUsernameAction {
//     type: typeof ADD_USERNAME;
//     payload: {username: User} ;
// }

// export type UserActionTypes = AddUsernameAction;
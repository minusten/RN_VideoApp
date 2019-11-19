export const ADD_USERNAME = 'ADD_USERNAME';

export interface User {
    username: string;
}

export interface UserState {
    username: User[];
}


export const ADD_PLAYLIST = 'ADD_PLAYLIST';

export interface Playlist {
    playlist: string[];
}

export interface PlaylistState {
    playlist: Playlist[];
}

export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';


// interface AddUsernameAction {
//     type: typeof ADD_USERNAME;
//     payload: {username: User} ;
// }

// export type UserActionTypes = AddUsernameAction;
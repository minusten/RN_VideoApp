import * as actionTypes from './types';

export const addUserName = (username: any) => {
  return {
    type: actionTypes.ADD_USERNAME,
    payload: username,
  };
};

export const addPlaylist = (playlist: any) => {
  return {
    type: actionTypes.ADD_PLAYLIST,
    payload: playlist,
  };
};

export const removePlaylist = (id: number) => {
  return {
    type: actionTypes.REMOVE_PLAYLIST,
    id,
  };
};
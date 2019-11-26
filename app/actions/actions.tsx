import * as actionTypes from './types';

export const addUserName = (username: string) => {
  return {
    type: actionTypes.ADD_USERNAME,
    payload: username,
  };
};

export const addPlaylist = (playlist: string[]) => {
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

export const addFavorites = (id: number) => {
  return {
    type: actionTypes.ADD_FAVORITES,
    id,
  };
};

export const addGooglePhoto = (photo: string) => {
  return {
    type: actionTypes.ADD_GOOGLEPHOTO,
    payload: photo,
  };
};
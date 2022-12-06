import { createAction } from '@reduxjs/toolkit';
import { FilmType } from '../types/film-type';
import { AuthorizationStatus } from '../const';

export const Action = {
  CHANGE_GENRE: 'changeGenre',
  SHOW_MORE_FILMS: 'showMoreFilms',
  RESET_SHOWN_FILMS: 'resetShownFilms',
  FILL_FILMS: 'fillFilms',
  APP_SET_ERROR: 'app/setError',
  SET_AUTH_STATUS: 'setAuthStatus',
  SET_DATA_IS_LOADING: 'setDataIsLoading'
};

export const changeGenre = createAction<{currentGenre: string}>(Action.CHANGE_GENRE);
export const showMoreFilms = createAction(Action.SHOW_MORE_FILMS);
export const resetShownFilms = createAction(Action.RESET_SHOWN_FILMS);
export const fillFilms = createAction<FilmType[]>(Action.FILL_FILMS);
export const setError = createAction<string | null>(Action.APP_SET_ERROR);
export const setAuthorizationStatus = createAction<AuthorizationStatus>(Action.SET_AUTH_STATUS);
export const setDataIsLoading = createAction<boolean>(Action.SET_DATA_IS_LOADING);

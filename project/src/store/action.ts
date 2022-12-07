import { createAction } from '@reduxjs/toolkit';
import { FilmType } from '../types/film-type';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { Review } from '../types/film-type';

export const Action = {
  CHANGE_GENRE: 'changeGenre',
  SHOW_MORE_FILMS: 'showMoreFilms',
  RESET_SHOWN_FILMS: 'resetShownFilms',
  FILL_FILMS: 'fillFilms',
  APP_SET_ERROR: 'app/setError',
  SET_AUTH_STATUS: 'setAuthStatus',
  SET_DATA_IS_LOADING: 'setDataIsLoading',
  SAVE_USER: 'saveUser',
  LOAD_FILM: 'loadFilm',
  LOAD_COMMENTS: 'loadComments',
  LOAD_SIMILAR: 'loadSimilar'
};

export const changeGenre = createAction<{currentGenre: string}>(Action.CHANGE_GENRE);
export const showMoreFilms = createAction(Action.SHOW_MORE_FILMS);
export const resetShownFilms = createAction(Action.RESET_SHOWN_FILMS);
export const fillFilms = createAction<FilmType[]>(Action.FILL_FILMS);
export const setError = createAction<string | null>(Action.APP_SET_ERROR);
export const setAuthorizationStatus = createAction<AuthorizationStatus>(Action.SET_AUTH_STATUS);
export const setDataIsLoading = createAction<boolean>(Action.SET_DATA_IS_LOADING);
export const saveUser = createAction<UserData>(Action.SAVE_USER);
export const loadFilm = createAction<FilmType>(Action.LOAD_FILM);
export const loadComments = createAction<Review[]>(Action.LOAD_COMMENTS);
export const loadSimilar = createAction<FilmType[]>(Action.LOAD_SIMILAR);

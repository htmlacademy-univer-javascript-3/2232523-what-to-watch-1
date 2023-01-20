import { createAction } from '@reduxjs/toolkit';

export const Action = {
  CHANGE_GENRE: 'app/changeGenre',
  SHOW_MORE_FILMS: 'film/showMoreFilms',
  RESET_SHOWN_FILMS: 'film/resetShownFilms',
  APP_SET_ERROR: 'app/setError',
  SET_DATA_IS_LOADING: 'app/setDataIsLoading',
  SET_FAVORITE_COUNT: 'user/setFavoriteCount'
};

export const changeGenre = createAction<{currentGenre: string}>(Action.CHANGE_GENRE);
export const showMoreFilms = createAction(Action.SHOW_MORE_FILMS);
export const resetShownFilms = createAction(Action.RESET_SHOWN_FILMS);
export const setError = createAction<string | null>(Action.APP_SET_ERROR);
export const setDataIsLoading = createAction<boolean>(Action.SET_DATA_IS_LOADING);
export const setFavoriteCount = createAction<number>(Action.SET_FAVORITE_COUNT);

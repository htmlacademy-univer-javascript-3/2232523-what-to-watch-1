import { Reducer } from '../../const';
import { State } from '../../types/app-state.type';
import { FilmType } from '../../types/film-type';

export const getPromo = (state: State): FilmType | null => state[Reducer.mainReducer].promo;
export const getFavouriteCount = (state: State): number => state[Reducer.mainReducer].favoriteCount;
export const getFavouriteFilms = (state: State): FilmType[] => state[Reducer.mainReducer].favoriteFilms;
export const getIsDataLoading = (state: State): boolean => state[Reducer.mainReducer].dataIsLoading;
export const getSortedFilms = (state: State): FilmType[] => state[Reducer.mainReducer].sortedFilms;
export const getShownCount = (state: State): number => state[Reducer.mainReducer].shownCount;
export const getError = (state: State): string | null => state[Reducer.mainReducer].error;
export const getFilms = (state: State): FilmType[] => state[Reducer.mainReducer].films;
export const getCurrentGenre = (state: State): string => state[Reducer.mainReducer].currentGenre;

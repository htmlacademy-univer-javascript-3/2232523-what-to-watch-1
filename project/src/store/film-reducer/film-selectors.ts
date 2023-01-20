import { Reducer } from '../../const';
import { State } from '../../types/app-state.type';
import { FilmType, Review } from '../../types/film-type';

export const getFilm = (state: State): FilmType | null | undefined => state[Reducer.filmReducer].film;
export const getIsFilmLoadingStatus = (state: State): boolean => state[Reducer.filmReducer].isFilmLoading;
export const getReviews = (state: State): Review[] => state[Reducer.filmReducer].reviews;
export const getSimilarFilms = (state: State): FilmType[] => state[Reducer.filmReducer].similarFilms;

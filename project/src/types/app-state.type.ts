import { store } from '../store';
import { FilmType } from './film-type';
import { AuthorizationStatus } from '../const';
import { Review } from '../types/film-type';

export type State = ReturnType<typeof store.getState>;

export type AppState = {
  films: FilmType[],
  sortedFilms: FilmType[],
  currentGenre: string,
  shownCount: number,
  dataIsLoading: boolean,
  error: string | null,
  promo: FilmType | null,
}

export type UserState = {
  authorizationStatus: AuthorizationStatus,
  avatar: string | null
}

export type FilmState = {
  film: FilmType | null,
  reviews: Review[],
  similarFilms: FilmType[],
}

export type AppDispatch = typeof store.dispatch;

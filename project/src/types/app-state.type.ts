import { store } from '../store';
import { FilmType } from './film-type';
import { AuthorizationStatus } from '../const';
import { Review } from '../types/film-type';
import { LogInState } from '../const';
import { UserData } from './user-data';

export type State = ReturnType<typeof store.getState>;

export type AppState = {
  films: FilmType[],
  sortedFilms: FilmType[],
  currentGenre: string,
  shownCount: number,
  dataIsLoading: boolean,
  error: string | null,
  promo: FilmType | null,
  favoriteCount: number,
  favoriteFilms: FilmType[]
}

export type UserState = {
  authorizationStatus: AuthorizationStatus,
  avatar: string | null,
  loginState: LogInState
}

export type FilmState = {
  film: FilmType | null,
  reviews: Review[],
  similarFilms: FilmType[],
  isFilmLoading: boolean
}

export type AppDispatch = typeof store.dispatch;

import { store } from '../store';
import { FilmType } from './film-type';
import { AuthorizationStatus } from '../const';
import {UserData} from '../types/user-data';
import { Review } from '../types/film-type';

export type AppState = {
  films: FilmType[],
  sortedFilms: FilmType[],
  currentGenre: string,
  shownCount: number,
  dataIsLoading: boolean,
  authorizationStatus: AuthorizationStatus,
  error: string | null,
  userDate: UserData | null,
  film: FilmType | null,
  comments: Review[],
  similar: FilmType[],
}

export type AppDispatch = typeof store.dispatch;

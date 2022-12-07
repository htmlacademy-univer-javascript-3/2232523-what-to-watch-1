import { store } from '../store';
import { FilmType } from './film-type';
import { AuthorizationStatus } from '../const';
import {UserData} from '../types/user-data';

export type AppState = {
  films: FilmType[],
  sortedFilms: FilmType[],
  currentGenre: string,
  shownCount: number,
  dataIsLoading: boolean,
  authorizationStatus: AuthorizationStatus,
  error: string | null,
  userDate: UserData | null
}

export type AppDispatch = typeof store.dispatch;

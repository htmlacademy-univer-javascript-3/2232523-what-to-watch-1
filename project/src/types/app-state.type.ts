import { store } from '../store';
import { FilmType } from './film-type';
import { AuthorizationStatus } from '../const';

export type AppState = {
  films: FilmType[],
  sortedFilms: FilmType[],
  currentGenre: string,
  shownCount: number,
  dataIsLoading: boolean,
  authorizationStatus: AuthorizationStatus,
  error: string | null
}

export type AppDispatch = typeof store.dispatch;

import { store } from '../store';
import { FilmType } from './film-type';

export type AppState = {
  films: FilmType[],
  sortedFilms: FilmType[],
  currentGenre: string,
}

export type AppDispatch = typeof store.dispatch;
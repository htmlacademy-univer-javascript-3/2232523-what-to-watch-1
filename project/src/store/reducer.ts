import { createReducer } from '@reduxjs/toolkit';
import { sortFilmsByGenre } from '../extra-functions/genre-functions';
import { AppState } from '../types/app-state.type';
import { changeGenre, fillFilms, setAuthorizationStatus, resetShownFilms, setDataIsLoading, showMoreFilms, setError } from './action';
import { AuthorizationStatus } from '../const';

const initialState: AppState = {
  films: [],
  sortedFilms: [],
  currentGenre: 'All genres',
  shownCount: 0,
  dataIsLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.currentGenre;
      state.sortedFilms = sortFilmsByGenre(state.films, state.currentGenre);
    })
    .addCase(fillFilms, (state, action) => {
      state.films = action.payload;
      state.shownCount = Math.min(state.films.length, 8);
      state.sortedFilms = state.films;
    })
    .addCase(showMoreFilms, (state) => {
      state.shownCount = Math.min(state.shownCount + 8, state.sortedFilms.length);
    })
    .addCase(resetShownFilms, (state) => {
      state.shownCount = Math.min(state.sortedFilms.length, 8);
    })
    .addCase(setDataIsLoading, (state, action) => {
      state.dataIsLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };

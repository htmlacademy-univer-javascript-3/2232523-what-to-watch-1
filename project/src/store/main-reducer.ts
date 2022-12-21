import { createSlice } from '@reduxjs/toolkit';
import { TIMEOUT_SHOW_ERROR } from '../const';
import { sortFilmsByGenre } from '../extra-functions/genre-functions';
import { AppState } from '../types/app-state.type';
import { AuthorizationStatus } from '../const';
import { changeGenre, resetShownFilms, setDataIsLoading, setError, showMoreFilms, loadPromo, fillFilms } from './action';
import { clearError, fetchFilmByID, fetchFilms, fetchPromoFilm } from '../store/api-actions.js';

const initialState: AppState = {
  films: [],
  sortedFilms: [],
  currentGenre: 'All genres',
  shownCount: 0,
  dataIsLoading: false,
  error: null,
  promo: null
};

export const mainReducer = createSlice({
  name: 'mainReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeGenre, (state, action) => {
        state.currentGenre = action.payload.currentGenre;
        state.sortedFilms = sortFilmsByGenre(state.films, state.currentGenre);
      })
      .addCase(showMoreFilms, (state) => {
        state.shownCount = Math.min(state.shownCount + 8, state.sortedFilms.length);
      })
      .addCase(resetShownFilms, (state) => {
        state.shownCount = Math.min(state.sortedFilms.length, 8);
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchFilms.pending, (state) => {
        state.dataIsLoading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.shownCount = Math.min(state.films.length, 8);
        state.sortedFilms = state.films;
        state.dataIsLoading = false;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promo = action.payload;
      });
  },
}
);

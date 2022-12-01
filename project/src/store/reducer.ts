import { createReducer } from '@reduxjs/toolkit';
import { sortFilmsByGenre } from '../extra-functions/genre-functions';
import { AppState } from '../types/app-state.type';
import { changeGenre, fillFilms, resetShownFilms, showMoreFilms } from './action';

const initialState: AppState = {
  films: [],
  sortedFilms: [],
  currentGenre: 'All genres',
  shownCount: 0
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
    });
});

export { reducer };

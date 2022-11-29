import { createReducer } from '@reduxjs/toolkit';
import { sortFilmsByGenre } from '../extra-functions/genre-functions';
import { AppState } from '../types/app-state.type';
import { changeGenre, fillFilms, filterFilms } from './action';

const initialState: AppState = {
  films: [],
  sortedFilms: [],
  currentGenre: 'All genres',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.currentGenre;
    })
    .addCase(fillFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(filterFilms, (state) => {
      state.sortedFilms = sortFilmsByGenre(state.films, state.currentGenre);
    });
});

export { reducer };

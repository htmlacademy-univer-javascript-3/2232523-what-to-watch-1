import { createSlice } from '@reduxjs/toolkit';
import { sortFilmsByGenre } from '../../extra-functions/genre-functions';
import { AppState } from '../../types/app-state.type';
import { changeGenre, resetShownFilms, setError, showMoreFilms, setFavoriteCount } from '../action';
import { fetchFilms, fetchPromoFilm, fetchFavoriteFilms, changePromoFavoriteStatus } from '../api-actions';
import { Reducer } from '../../const';

const initialState: AppState = {
  films: [],
  sortedFilms: [],
  currentGenre: 'All genres',
  shownCount: 0,
  dataIsLoading: false,
  error: null,
  promo: null,
  favoriteFilms: [],
  favoriteCount: 0
};

export const mainReducer = createSlice({
  name: Reducer.MAIN_REDUCER,
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
      .addCase(fetchFilms.rejected, (state) => {
        state.dataIsLoading = false;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.favoriteCount = state.favoriteFilms.length;
        state.dataIsLoading = false;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promo = action.payload;
      })
      .addCase(changePromoFavoriteStatus.fulfilled, (state, action) => {
        state.promo = action.payload;
      })
      .addCase(setFavoriteCount, (state, action) => {
        state.favoriteCount = action.payload;
      });
  },
}
);

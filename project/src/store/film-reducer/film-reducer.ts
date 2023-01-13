import { Reducer } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { FilmState } from '../../types/app-state.type';
import { fetchCommentsByID, fetchFilmByID, fetchSimilarByID, changeFilmFavoriteStatus } from '../api-actions';

const initialState: FilmState = {
  film: undefined,
  reviews: [],
  similarFilms: [],
  isFilmLoading: false
};

export const filmReducer = createSlice({
  name: Reducer.filmReducer,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmByID.pending, (state) => {
        state.isFilmLoading = true;
      })
      .addCase(fetchFilmByID.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmLoading = false;
      })
      .addCase(fetchFilmByID.rejected, (state) => {
        state.isFilmLoading = false;
      })
      .addCase(fetchCommentsByID.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchSimilarByID.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(changeFilmFavoriteStatus.fulfilled, (state, action) => {
        if (state.film?.id === action.payload.id) {
          state.film.isFavorite = action.payload.isFavorite;
        }
      });
  },
});

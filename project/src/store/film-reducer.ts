import { createSlice } from '@reduxjs/toolkit';
import { sortFilmsByGenre } from '../extra-functions/genre-functions';
import { FilmState } from '../types/app-state.type';
import { changeGenre, loadSimilar, resetShownFilms, showMoreFilms } from '../store/action';
import { fetchReviewsByID, fetchFilmByID, fetchSimilarByID, postReview } from '../store/api-actions.js';

const initialState: FilmState = {
  film: null,
  comments: [],
  similar: []
};

export const filmReducer = createSlice({
  name: 'filmReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmByID.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchReviewsByID.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchSimilarByID.fulfilled, (state, action) => {
        state.similar = action.payload;
      });
  },
});

import { createSlice } from '@reduxjs/toolkit';
import { FilmState } from '../types/app-state.type';
import { fetchReviewsByID, fetchFilmByID, fetchSimilarByID } from '../store/api-actions';

const initialState: FilmState = {
  film: null,
  reviews: [],
  similarFilms: []
};

export const filmReducer = createSlice({
  name: 'FILM_REDUCER',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmByID.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchReviewsByID.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchSimilarByID.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      });
  },
});

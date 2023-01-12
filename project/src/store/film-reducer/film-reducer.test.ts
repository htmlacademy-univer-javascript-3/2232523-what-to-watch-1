import { FilmState } from '../../types/app-state.type';
import { takeTestFilm, takeTestFilms, takeTestReviews } from '../../mocks/mocks';
import { filmReducer } from './film-reducer';
import { changeFilmFavoriteStatus, fetchCommentsByID, fetchFilmByID, fetchSimilarByID } from '../api-actions';

const testFilm = takeTestFilm();
const testFilms = takeTestFilms();
const testReviews = takeTestReviews();

describe('film-reducer', () => {
  let state: FilmState;

  beforeEach(() => {
    state = {
      film: undefined,
      reviews: [],
      similarFilms: [],
      isFilmLoading: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(filmReducer.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        film: undefined,
        reviews: [],
        similarFilms: [],
        isFilmLoading: false,
      });
  });

  describe('fetchFilmByID test', () => {
    it('should update film and isFilmLoading to false if fetchFilmByID fulfilled', () => {
      state.isFilmLoading = true;
      expect(filmReducer.reducer(state, {type: fetchFilmByID.fulfilled.type, payload: testFilm}))
        .toEqual({isFilmLoading: false, similarFilms: [], film: testFilm, reviews: []});
    });
    it('should update isFilmLoading to true if fetchFilmByID pending', () => {
      expect(filmReducer.reducer(state, {type: fetchFilmByID.pending.type}).isFilmLoading)
        .toEqual(true);
    });
    it('should update isFilmLoading to false if fetchFilmByID rejected', () => {
      state.isFilmLoading = true;
      expect(filmReducer.reducer(state, {type: fetchFilmByID.fulfilled.type}).isFilmLoading)
        .toEqual(false);
    });
  });

  describe('fetchSimilarByID test', () => {
    it('should load similar films on fulfilled', () => {
      expect(filmReducer.reducer(state, { type: fetchSimilarByID.fulfilled.type, payload: testFilms }).similarFilms)
        .toEqual(testFilms);
    });
  });

  describe('fetchCommentsByID test', () => {
    it('should load reviews on fulfilled', () => {
      expect(filmReducer.reducer(state, { type: fetchCommentsByID.fulfilled.type, payload: testReviews }))
        .toMatchObject({reviews: testReviews});
    });
  });

  describe('changeFilmFavoriteStatus test', () => {
    it('should update film favorite status if changeFilmFavoriteStatus fulfilled and id is similar', () => {
      const testFilm2 = takeTestFilm();
      testFilm2.isFavorite = true;
      state.film = testFilm;
      expect(filmReducer.reducer(state, {type: changeFilmFavoriteStatus.fulfilled.type, payload: testFilm2}).film?.isFavorite)
        .toEqual(true);
    });
    it('should not update film favorite status if changeFilmFavoriteStatus fulfilled and id is not similar', () => {
      const testFilm2 = takeTestFilm();
      testFilm2.id = 2;
      testFilm2.isFavorite = true;
      state.film = testFilm;
      expect(filmReducer.reducer(state, {type: changeFilmFavoriteStatus.fulfilled.type, payload: testFilm2}).film?.isFavorite)
        .toEqual(false);
    });
  });
});

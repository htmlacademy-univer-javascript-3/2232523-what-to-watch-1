import { AppState } from '../../types/app-state.type';
import { mainReducer } from './main-reducer';
import { changeGenre } from '../action';
import { takeTestFilm, takeTestFilms } from '../../mocks/mocks';
import { fetchFavoriteFilms, fetchFilms, fetchPromoFilm } from '../api-actions';

const testFilm = takeTestFilm();
const testFilms = takeTestFilms();

describe('main-reducer', () => {
  let state: AppState;
  beforeEach(() => {
    state = {
      films: [],
      sortedFilms: [],
      currentGenre: 'All genres',
      shownCount: 0,
      dataIsLoading: false,
      error: null,
      promo: null,
      favoriteFilms: [],
      favoriteCount: 0,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(mainReducer.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  describe('changeGenre test', () => {
    it('should sort films by genre', () => {
      for(const genre of mainReducer
        .reducer(state, { type: changeGenre.type, payload: testFilm.genre })
        .sortedFilms
        .map((film) => film.genre)
      ) {
        expect(genre)
          .toEqual(testFilm.genre);
      }
    });
  });

  describe('fetchFilms test', () => {
    it('load all films', () => {
      expect(mainReducer.reducer(state, { type: fetchFilms.fulfilled.type, payload: testFilms }).films)
        .toEqual(testFilms);
    });
    it('should update dataIsLoading to true if fetchFilms pending', () => {
      expect(mainReducer.reducer(state, {type: fetchFilms.pending.type}).dataIsLoading)
        .toEqual(true);
    });
    it('should update dataIsLoading to false if fetchFilms rejected', () => {
      state.dataIsLoading = true;
      expect(mainReducer.reducer(state, {type: fetchFilms.rejected.type}).dataIsLoading)
        .toEqual(false);
    });
  });

  describe('fetchPromoFilm test', () => {
    it('load promo film', () => {
      expect(mainReducer.reducer(state, { type: fetchPromoFilm.fulfilled.type, payload: testFilm }).promo)
        .toEqual(testFilm);
    });
  });

  describe('fetchFavoriteFilms test', () => {
    it('load promo film', () => {
      expect(mainReducer.reducer(state, { type: fetchFavoriteFilms.fulfilled.type, payload: testFilms }).favoriteFilms)
        .toEqual(testFilms);
    });
  });
});

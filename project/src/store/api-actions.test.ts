import { Action } from '@reduxjs/toolkit';
import { APIRoute } from '../const';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import { AuthData } from '../types/auth-data';
import { State } from '../types/app-state.type';
import { UserReview } from '../types/user-review';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { takeTestFilm, takeTestFilms, takeTestReviews } from '../mocks/mocks';
import { changeFilmFavoriteStatus, getAuthStatus, fetchCommentsByID, fetchFavoriteFilms, fetchFilmByID, fetchFilms, fetchPromoFilm, fetchSimilarByID, logIn, logOut, postReview } from './api-actions';

jest.mock('../services/error-handle.ts');

describe('Async actions', () => {
  const testFilm = takeTestFilm();
  const testFilms = takeTestFilms();
  const testReviews = takeTestReviews();

  const api = createAPI();
  const testAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const testStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('authorization status should become Auth when server returns 200', async () => {
    const store = testStore();
    testAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(getAuthStatus());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      getAuthStatus.pending.type,
      getAuthStatus.fulfilled.type
    ]);
  });

  it('should dispatch login if POST /login', async () => {
    const testUser: AuthData = { email: 'aa@gmail.com', password: 'aaa17' };

    testAPI
      .onPost(APIRoute.Login)
      .reply(200, { token: 'aaaaaaa' });


    const store = testStore();

    await store.dispatch(logIn(testUser));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      logIn.pending.type,
      logIn.fulfilled.type
    ]);
  });

  it('should dispatch logout if DELETE /logout', async () => {
    testAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = testStore();

    await store.dispatch(logOut());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      logOut.pending.type,
      logOut.fulfilled.type
    ]);
  });

  it('should dispatch promo if GET /promo', async () => {
    testAPI
      .onGet(APIRoute.Promo)
      .reply(200, testFilm);

    const store = testStore();

    await store.dispatch(fetchPromoFilm());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchPromoFilm.pending.type,
      fetchPromoFilm.fulfilled.type
    ]);
  });

  it('should dispatch films if GET /films', async () => {
    testAPI
      .onGet(APIRoute.Films)
      .reply(200, testFilms);

    const store = testStore();

    await store.dispatch(fetchFilms());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchFilms.pending.type,
      fetchFilms.fulfilled.type
    ]);
  });

  it('should fetch film by id if GET /films/{id}', async () => {
    testAPI
      .onGet('/films/1')
      .reply(200, testFilm);

    const store = testStore();

    await store.dispatch(fetchFilmByID('1'));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchFilmByID.pending.type,
      fetchFilmByID.fulfilled.type
    ]);
  });

  it('should fetch similar film by id if GET /films/{id}/similar', async () => {
    testAPI
      .onGet('/films/1/similar')
      .reply(200, testFilms);

    const store = testStore();

    await store.dispatch(fetchSimilarByID('1'));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchSimilarByID.pending.type,
      fetchSimilarByID.fulfilled.type
    ]);
  });

  it('should fetch comments by id if GET /comments/{id}', async () => {
    testAPI
      .onGet('/comments/1')
      .reply(200, testReviews);

    const store = testStore();

    await store.dispatch(fetchCommentsByID('1'));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchCommentsByID.pending.type,
      fetchCommentsByID.fulfilled.type
    ]);
  });

  it('POST /comments/{id}', async () => {
    const postData: UserReview = {
      filmId: '1',
      comment: 'aaaa',
      rating: 3,
    };

    testAPI
      .onPost(`/comments/${postData.filmId}`, {
        comment: postData.comment,
        rating: postData.rating
      })
      .reply(200);

    const store = testStore();

    await store.dispatch(postReview(postData));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      postReview.pending.type,
      postReview.fulfilled.type
    ]);
  });

  it('should fetch favorite films if GET /favorite', async () => {
    testAPI
      .onGet(APIRoute.Favorite)
      .reply(200, testFilms);

    const store = testStore();

    await store.dispatch(fetchFavoriteFilms());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchFavoriteFilms.pending.type,
      fetchFavoriteFilms.fulfilled.type
    ]);
  });

  it('POST /favorite/{filmId}/{status}', async () => {
    const postData = {
      filmId: 1,
      status: 1
    };

    testAPI
      .onPost('/favorite/1/1')
      .reply(200);

    const store = testStore();

    await store.dispatch(changeFilmFavoriteStatus(postData));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      changeFilmFavoriteStatus.pending.type,
      changeFilmFavoriteStatus.fulfilled.type
    ]);
  });
});

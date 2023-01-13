import thunk from 'redux-thunk';
import AddReview from './add-review';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/app-state.type';
import { render, screen } from '@testing-library/react';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../../const';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { takeTestFilm, takeTestFilms, takeTestReviews } from '../../mocks/mocks';

const testFilm = takeTestFilm();
const testFilms = takeTestFilms();
const testReviews = takeTestReviews();

jest.mock('../../services/error-handle.ts');
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

describe('add-review tests', () => {
  it('should render correctly if authorization status is NoAuth', () => {
    const store = mockStore({
      USER_REDUCER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        avatar: null,
      },
      FILM_REDUCER: {
        film: testFilm,
        reviews: testReviews,
        similarFilms: testFilms,
      },
      MAIN_REDUCER: {
        films: testFilms,
        sortedFilms: testFilms,
        promo: testFilm,
        favoriteFilms: testFilms,
        favoriteCount: testFilms.length,
      }
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route
              path={AppRoute.Main}
              element={<h1>It is main</h1>}
            />
            <Route
              path='*'
              element={<AddReview />}
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/It is main/i)).toBeInTheDocument();
    expect(screen.queryByText(/Add Review/i)).not.toBeInTheDocument();
  });

  it('should render correctly if authorization status is Auth', () => {
    const store = mockStore({
      USER_REDUCER: {
        authorizationStatus: AuthorizationStatus.Auth,
        avatar: null,
      },
      FILM_REDUCER: {
        film: testFilm,
        reviews: testReviews,
        similarFilms: testFilms,
      },
      MAIN_REDUCER: {
        films: testFilms,
        sortedFilms: testFilms,
        promo: testFilm,
        favoriteFilms: testFilms,
        favoriteCount: testFilms.length,
      }
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddReview />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Add Review/i)).toBeInTheDocument();
  });
});

import User from './user';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { State } from '../../types/app-state.type';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../../const';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { takeTestFilm, takeTestFilms, takeTestReviews } from '../../mocks/mocks';

const testFilms = takeTestFilms();
const testFilm = takeTestFilm();
const testReviews = takeTestReviews();

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

jest.mock('../../services/error-handle.ts');

describe('user-block tests', () => {
  it('should render and redirect correctly if not authorized', () => {
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
              path={'/login'}
              element={<h1>aaaaa</h1>}
            />
            <Route
              path='*'
              element={<User />}
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId(/login-link/i));
    expect(screen.getByText(/aaaaa/i)).toBeInTheDocument();
  });

  it('should render and redirect correctly if authorized', () => {
    const store = mockStore({
      USER_REDUCER: {
        authorizationStatus: AuthorizationStatus.Auth,
        avatar: null,
      },
      FILM_REDUCER: {
        film: testFilm,
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
              path={AppRoute.MyList}
              element={<h1>bbbbb</h1>}
            />
            <Route
              path='*'
              element={<User />}
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId(/avatar/i));
    expect(screen.getByText(/bbbbb/i)).toBeInTheDocument();
  });
});

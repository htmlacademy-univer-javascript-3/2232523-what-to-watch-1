import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import WelcomeScreen from './welcome-screen';
import { createAPI } from '../../services/api';
import { MemoryRouter } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { State } from '../../types/app-state.type';
import { render, screen } from '@testing-library/react';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { takeTestFilm, takeTestFilms } from '../../mocks/mocks';
import { configureMockStore } from '@jedmao/redux-mock-store';

const testFilm = takeTestFilm();
const testFilms = takeTestFilms();

jest.mock('../../services/error-handle.ts');
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

describe('main tests', () => {
  it('should render correctly if authorization status is NoAuth', () => {
    const store = mockStore({
      USER_REDUCER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        avatar: null,
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
          <WelcomeScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.queryByText(/My List/i)).not.toBeInTheDocument();
  });

  it('should render correctly if authorization status is Auth', () => {
    const store = mockStore({
      USER_REDUCER: {
        authorizationStatus: AuthorizationStatus.Auth,
        avatar: null,
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
          <WelcomeScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole('user-block-avatar', {})).toBeTruthy();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    expect(screen.getByText(/My List/i)).toBeInTheDocument();
  });
});

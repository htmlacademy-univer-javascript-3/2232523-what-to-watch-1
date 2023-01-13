import MyList from './my-list';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { MemoryRouter } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { State } from '../../types/app-state.type';
import { render, screen } from '@testing-library/react';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
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

describe('my-list tests', () => {
  it('should render correctly', () => {
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
          <MyList />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
});

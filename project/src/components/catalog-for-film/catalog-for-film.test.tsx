import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { MemoryRouter } from 'react-router-dom';
import CatalogForFilm from './catalog-for-film';
import { State } from '../../types/app-state.type';
import { render, screen } from '@testing-library/react';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { takeTestFilms, takeTestFilm } from '../../mocks/mocks';

jest.mock('../../services/error-handle.ts');
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const testFilm = takeTestFilm();
const testFilms = takeTestFilms();

describe('catalog for film tests', () => {
  it('should render correctly if similar', () => {
    const store = mockStore({
      FILM_REDUCER: {
        similarFilms: testFilms,
      },
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CatalogForFilm currentFilm={testFilm} similarFilms={testFilms}/>
        </MemoryRouter>
      </Provider>
    );

    const filmCards = screen.getAllByTestId('film-card');
    expect(filmCards.length).toEqual(4);
  });
});

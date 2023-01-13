import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { MemoryRouter } from 'react-router-dom';
import CatalogForMain from './catalog-for-main';
import { takeTestFilms } from '../../mocks/mocks';
import { State } from '../../types/app-state.type';
import { render, screen } from '@testing-library/react';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';

jest.mock('../../services/error-handle.ts');
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const testFilms = takeTestFilms();

describe('catalog for main tests', () => {
  it('should render correctly if on main', () => {
    const store = mockStore({
      MAIN_REDUCER: {
        sortedFilms: testFilms,
        shownCount: testFilms.length,
      },
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CatalogForMain/>
        </MemoryRouter>
      </Provider>
    );

    const filmCards = screen.getAllByTestId('film-card');

    expect(filmCards.length).toBe(testFilms.length);
  });

  it('show more button not rendering if shownCount > sortedFilms.count', () => {
    const store = mockStore({
      MAIN_REDUCER: {
        sortedFilms: testFilms,
        shownCount: testFilms.length + 1,
      },
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CatalogForMain/>
        </MemoryRouter>
      </Provider>
    );

    const showMoreButton = screen.queryByTestId('show-more-button');

    expect(showMoreButton).not.toBeInTheDocument();
  });

  it('show more button not rendering if shownCount === sortedFilms.count', () => {
    const store = mockStore({
      MAIN_REDUCER: {
        sortedFilms: testFilms,
        shownCount: testFilms.length,
      },
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CatalogForMain/>
        </MemoryRouter>
      </Provider>
    );

    const showMoreButton = screen.queryByTestId('show-more-button');

    expect(showMoreButton).not.toBeInTheDocument();
  });

  it('show more button renders if shownCount < sortedFilms.count', () => {
    const store = mockStore({
      MAIN_REDUCER: {
        sortedFilms: testFilms,
        shownCount: 1,
      },
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CatalogForMain/>
        </MemoryRouter>
      </Provider>
    );

    const showMoreButton = screen.getByTestId('show-more-button');

    expect(showMoreButton).toBeInTheDocument();
  });
});

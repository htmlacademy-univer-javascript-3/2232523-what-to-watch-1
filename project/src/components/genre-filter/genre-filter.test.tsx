import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { takeTestFilm, takeTestFilms } from '../../mocks/mocks';
import { createAPI } from '../../services/api';
import GenreFilter from '../../components/genre-filter/genre-filter';
import { State } from '../../types/app-state.type';

jest.mock('../../services/error-handle.ts');
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);

const testFilms = takeTestFilms();
const testFilm = takeTestFilm();

describe('genres-filter tests', () => {
  const store = mockStore({
    MAIN_REDUCER: {
      films: testFilms,
      currentGenre: testFilm.genre
    }
  });
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <GenreFilter />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(testFilm.genre)).toBeInTheDocument();
  });
});

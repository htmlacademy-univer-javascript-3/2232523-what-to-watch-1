import FilmCard from './film-card';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { takeTestFilm } from '../../mocks/mocks';
import { render, screen } from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

const testFilm = takeTestFilm();
const mockStore = configureMockStore();
const store = mockStore();

describe('film-card tests', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FilmCard
            film={testFilm}
            posterSrc={testFilm.posterImage}
          />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(testFilm.name)).toBeInTheDocument();
  });
});

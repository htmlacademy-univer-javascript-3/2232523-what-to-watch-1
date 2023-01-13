import SimilarFilms from './similar-films';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { takeTestFilms, takeTestFilm } from '../../mocks/mocks';

const testFilms = takeTestFilms();
const testFilm = takeTestFilm();

describe('similar-films tests', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <SimilarFilms currentFilm={testFilm} similarFilms={testFilms} />
      </MemoryRouter>
    );

    const filmCards = screen.getAllByTestId('film-card');
    expect(filmCards.length).toEqual(4);
  });
});

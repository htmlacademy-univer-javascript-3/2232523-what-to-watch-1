import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { takeTestFilm } from '../../mocks/mocks';
import FilmCard from './film-card';

const testFilm = takeTestFilm();

describe('film-card tests', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <FilmCard
          film={testFilm}
          posterSrc={testFilm.posterImage}
        />
      </MemoryRouter>
    );

    expect(screen.getByText(testFilm.name)).toBeInTheDocument();
  });
});

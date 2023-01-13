import { render, screen } from '@testing-library/react';
import { takeTestFilm } from '../../mocks/mocks';
import Details from './details';

const testFilm = takeTestFilm();

describe('details tests', () => {
  it('should render correctly', () => {
    render(
      <Details
        genre={testFilm.genre}
        director={testFilm.director}
        actors={testFilm.starring}
        releaseYear={testFilm.released}
        duration={testFilm.runTime}
      />
    );

    expect(screen.getByText(testFilm.genre)).toBeInTheDocument();
    expect(screen.getByText(testFilm.director)).toBeInTheDocument();
    expect(screen.getByText(testFilm.released)).toBeInTheDocument();
  });
});

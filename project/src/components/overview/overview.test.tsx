import Overview from './overview';
import { takeTestFilm } from '../../mocks/mocks';
import { render, screen } from '@testing-library/react';

const testFilm = takeTestFilm();

describe('overview tests', () => {
  it('should render correctly', () => {
    render(
      <Overview
        description={testFilm.description}
        director={testFilm.director}
        rating={testFilm.rating}
        votesNumber={testFilm.scoresCount}
        actors={testFilm.starring}
      />
    );
    expect(screen.getByText(`Director: ${testFilm.director}`)).toBeInTheDocument();
    expect(screen.getByText(testFilm.rating)).toBeInTheDocument();
    expect(screen.getByText(`Starring: ${testFilm.starring.join(', ')} and other`)).toBeInTheDocument();
  });
});

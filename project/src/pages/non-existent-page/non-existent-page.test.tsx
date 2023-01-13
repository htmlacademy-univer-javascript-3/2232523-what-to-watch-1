import { MemoryRouter } from 'react-router-dom';
import NonExistentPage from './non-existent-page';
import { render, screen } from '@testing-library/react';

describe('Non-existent page test', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <NonExistentPage/>
      </MemoryRouter>
    );

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });
});

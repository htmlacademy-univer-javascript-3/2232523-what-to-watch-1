import { render, screen } from '@testing-library/react';
import NonExistentPage from './non-existent-page';

describe('Non-existent page test', () => {
  it('should render correctly', () => {
    render( <NonExistentPage />);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });
});

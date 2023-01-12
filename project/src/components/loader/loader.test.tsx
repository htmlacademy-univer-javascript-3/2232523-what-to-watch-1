import { render, screen } from '@testing-library/react';
import Load from './loader';

describe('Load test', () => {
  it('should render correctly', () => {
    render( <Load />);

    expect(screen.getByText('Загрузка')).toBeInTheDocument();
  });
});

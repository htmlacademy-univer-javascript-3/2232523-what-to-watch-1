import ReviewCard from './review-card';
import { render, screen } from '@testing-library/react';

describe('review-card tests', () => {
  it('should render correctly', () => {
    render(<ReviewCard postedDate={'December 17, 1995'} reviewAuthor={{id: 1, name: 'Boris Lvov'}} reviewRating={10} reviewText={'aaaaa'} />);

    expect(screen.getByText('December 17, 1995')).toBeInTheDocument();
    expect(screen.getByText('aaaaa')).toBeInTheDocument();
    expect(screen.getByText('Boris Lvov')).toBeInTheDocument();
  });
});

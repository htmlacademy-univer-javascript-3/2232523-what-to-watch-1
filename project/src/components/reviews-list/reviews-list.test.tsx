import ReviewsList from './reviews-list';
import { MemoryRouter } from 'react-router-dom';
import { takeTestReviews } from '../../mocks/mocks';
import { render, screen } from '@testing-library/react';

const testReviews = takeTestReviews();

describe('reviews-list tests', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <ReviewsList reviews={testReviews} />
      </MemoryRouter>
    );

    const reviewCards = screen.getAllByTestId('review-card');

    expect(reviewCards.length).toBe(testReviews.length);
  });
});

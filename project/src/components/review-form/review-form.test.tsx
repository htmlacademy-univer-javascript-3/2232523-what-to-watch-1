import { Provider } from 'react-redux';
import ReviewForm from './review-form';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';

const mockStore = configureMockStore();

describe('review-form tests', () => {
  const store = mockStore();
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ReviewForm/>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Post/i)).toBeInTheDocument();
  });
});

import Logo from './logo';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore();

describe('Component: Logo', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Logo/>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/T/i)).toBeInTheDocument();
    expect(screen.getAllByText(/W/i)[0]).toBeInTheDocument();
  });
});

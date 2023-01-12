import SignIn from './sign-in';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { LogInState } from '../../const';
import { createAPI } from '../../services/api';
import { MemoryRouter } from 'react-router-dom';
import { takeTestFilms } from '../../mocks/mocks';
import { State } from '../../types/app-state.type';
import userEvent from '@testing-library/user-event';
import { AuthorizationStatus } from '../../const';
import { render, screen } from '@testing-library/react';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';

jest.mock('../../services/error-handle.ts');
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const testStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);
const testFilms = takeTestFilms();

const store = testStore({
  USER_REDUCER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    avatar: null,
    loginState: LogInState.NoError
  },
  MAIN_REDUCER: {
    favoriteFilms: testFilms,
  }
});

describe('sign-in tests', () => {
  it('should render correctly', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('user-email'), 'aaaa@mail.ru');
    await userEvent.type(screen.getByTestId('user-password'), 'aaaaa17');
    expect(screen.getByDisplayValue(/aaaa@mail.ru/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/aaaaa17/i)).toBeInTheDocument();
  });
});

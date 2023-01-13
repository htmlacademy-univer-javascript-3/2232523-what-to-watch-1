import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createAPI } from '../../services/api';
import { State } from '../../types/app-state.type';
import Error from './error';

jest.mock('../../services/error-handle.ts');
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

describe('error test', () => {
  const store = mockStore({
    MAIN_REDUCER: {
      error: 'aaaaaaaaaaaaaa',
    },
  });
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Error />
      </Provider>
    );

    expect(screen.getByText(/aaaaaaaaaaaaaa/i)).toBeInTheDocument();
  });
});

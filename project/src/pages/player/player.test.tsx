import Player from './player';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createAPI } from '../../services/api';
import { MemoryRouter } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { State } from '../../types/app-state.type';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { takeTestFilms, takeTestFilm } from '../../mocks/mocks';
import { fireEvent, render, screen } from '@testing-library/react';

const testFilm = takeTestFilm();
const testFilms = takeTestFilms();

jest.mock('../../services/error-handle.ts');
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

describe('video-player tests', () => {
  const store = mockStore({
    USER_REDUCER: {
      authorizationStatus: AuthorizationStatus.NoAuth,
      avatar: null,
    },
    MAIN_REDUCER: {
      favoriteFilms: testFilms,
    },
    FILM_REDUCER: {
      film: testFilm,
      isFilmLoading: false,
    }
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Player />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });


  it('should play and stop when button clicked', async () => {
    window.HTMLVideoElement.prototype.play = jest.fn();
    window.HTMLVideoElement.prototype.pause = jest.fn();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Player />
        </MemoryRouter>
      </Provider>
    );
    const playButton = screen.getByTestId('player');
    fireEvent.click(playButton);
    expect(window.HTMLVideoElement.prototype.play).toBeCalled();
    fireEvent.click(playButton);
    expect(window.HTMLVideoElement.prototype.pause).toBeCalled();
  });
});

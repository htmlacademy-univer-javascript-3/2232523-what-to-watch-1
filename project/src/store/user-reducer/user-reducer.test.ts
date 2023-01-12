import { LogInState } from '../../const';
import { userReducer } from './user-reducer';
import { AuthorizationStatus } from '../../const';
import { UserState } from '../../types/app-state.type';
import { logIn, logOut, getAuthStatus } from '../api-actions';

describe('User-reducer', () => {
  let state: UserState;
  const user = {
    avatarUrl: 'aa/aaa',
    email: 'aa@gmail.com',
    id: 1,
    name: 'Aaa',
    token: 'aaaaaa'
  };

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      avatar: null,
      loginState: LogInState.NoError
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(userReducer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('getAuthStatus test', () => {
    it('should update AuthorizationStatus to Auth if getAuthStatus fulfilled', () => {
      expect(
        userReducer.reducer(state, {
          type: getAuthStatus.fulfilled.type,
          payload: user,
        }).authorizationStatus
      )
        .toEqual(AuthorizationStatus.Auth);
    });

    it('should update AuthorizationStatus to NoAuth if getAuthStatus rejected', () => {
      expect(
        userReducer.reducer(state, { type: getAuthStatus.rejected.type }).authorizationStatus
      ).toEqual(AuthorizationStatus.NoAuth);
    });
  });

  describe('logIn test', () => {
    it('should update AuthorizationStatus to Auth if login fulfilled', () => {
      expect(
        userReducer.reducer(state, { type: logIn.fulfilled.type, payload: user }).authorizationStatus
      ).toEqual(AuthorizationStatus.Auth);
    });

    it('should update AuthorizationStatus to NoAuth if login rejected', () => {
      expect(
        userReducer.reducer(state, { type: logIn.rejected.type }).authorizationStatus
      ).toEqual(AuthorizationStatus.NoAuth);
    });

    it('should update loginState to NoError if login fulfilled', () => {
      expect(
        userReducer.reducer(state, { type: logIn.fulfilled.type, payload: user }).loginState
      ).toEqual(LogInState.NoError);
    });
  });

  describe('logOut test', () => {
    it('should update AuthorizationStatus to NoAuth if logout fulfilled', () => {
      expect(
        userReducer.reducer(state, { type: logOut.fulfilled.type }).authorizationStatus
      ).toEqual(AuthorizationStatus.NoAuth);
    });
  });
});

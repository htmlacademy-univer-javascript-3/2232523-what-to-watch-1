import { Reducer } from '../const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { LogInState } from '../const';
import { UserState } from '../types/app-state.type.js';
import { dropToken } from '../services/token';
import { getAuthStatus, logIn, logOut } from './api-actions';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  avatar: null,
  loginState: LogInState.NoError
};

export const userReducer = createSlice({
  name: Reducer.USER_REDUCER,
  initialState,
  reducers: {
    setLoginState: (state, action: PayloadAction<LogInState>) => {
      state.loginState = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logOut.fulfilled, (state) => {
        dropToken();
        state.avatar = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.avatar = action.payload.avatarUrl;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.loginState = LogInState.NoError;
      })
      .addCase(getAuthStatus.fulfilled, (state, action) => {
        state.avatar = action.payload.avatarUrl;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(getAuthStatus.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const {setLoginState} = userReducer.actions;

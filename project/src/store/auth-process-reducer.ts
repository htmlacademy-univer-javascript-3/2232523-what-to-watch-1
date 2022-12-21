import { createSlice } from '@reduxjs/toolkit';
import { dropToken, saveToken } from '../services/token';
import { UserState } from '../types/app-state.type.js';
import { AuthorizationStatus } from '../const';
import { checkAuth, logIn, logOut, } from '../store/api-actions.js';
import { setAuthorizationStatus, setAvatar } from '../store/action.js';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  avatar: null,
};

export const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logOut.fulfilled, (state) => {
        dropToken();
        state.avatar = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        saveToken(action.payload.token);
        state.avatar = action.payload.avatarUrl;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.avatar = action.payload.avatarUrl;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

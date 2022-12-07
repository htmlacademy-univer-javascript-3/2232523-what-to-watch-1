import {AxiosInstance} from 'axios';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {FilmType} from '../types/film-type';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {dropToken, saveToken} from '../services/token';
import {AppDispatch, AppState} from '../types/app-state.type';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {fillFilms, setDataIsLoading, setAuthorizationStatus, setError, saveUser} from './action';

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance
}>(
  'fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setDataIsLoading(true));
    const { data } = await api.get<FilmType[]>(APIRoute.Films);
    dispatch(fillFilms(data));
    dispatch(setDataIsLoading(false));
  }
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance
}>(
  'checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const {data: user} = await api.get(APIRoute.Login);
      dispatch(saveUser(user));
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const clearError = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance
}>(
  'clearError',
  async (_arg, { dispatch }) => {
    setTimeout(() => {
      dispatch(setError(null));
    }, TIMEOUT_SHOW_ERROR);
  }
);

export const logIn = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance
}>(
  'login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, {
      email,
      password,
    });
    saveToken(data.token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  }
);

export const logOut = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: AppState;
    extra: AxiosInstance
}>(
  'logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
);

import { setError } from './action';
import { AxiosInstance } from 'axios';
import { Review } from '../types/film-type';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { FilmType } from '../types/film-type';
import { UserComment } from '../types/user-review';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { AppDispatch, State } from '../types/app-state.type';
import { saveToken } from '../services/token';

export const fetchFilms = createAsyncThunk<FilmType[], undefined, {
  state: State;
  extra: AxiosInstance
}>(
  'fetchFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<FilmType[]>(APIRoute.Films);
    return data;
  }
);

export const getAuthStatus = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance
}>(
  'getAuthStatus',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Login);
    return data;
  }
);

export const clearError = createAsyncThunk< void, undefined, {
  state: State;
  dipatch: AppDispatch;
  extra: AxiosInstance
}>(
  'clearError',
  async (_arg, {dispatch}) => {
    setTimeout(() => {
      dispatch(setError(null));
    }, TIMEOUT_SHOW_ERROR);
  }
);

export const logIn = createAsyncThunk<UserData, AuthData, {
  state: State;
  extra: AxiosInstance
}>(
  'login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, {
      email,
      password,
    });
    saveToken(data.token);
    return data;
  }
);

export const logOut = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance
}>(
  'logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
  }
);

export const fetchFilmByID = createAsyncThunk<FilmType, string, {
    state: State;
    extra: AxiosInstance;
}>(
  'fetchFilmById',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<FilmType>(`${APIRoute.Films}/${filmId}`);
    return data;
  }
);

export const fetchCommentsByID = createAsyncThunk<Review[], string, {
    state: State;
    extra: AxiosInstance;
}>(
  'fetchCommentsById',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<Review[]>(
      `${APIRoute.Comments}/${filmId}`
    );
    return data;
  }
);

export const fetchSimilarByID = createAsyncThunk<FilmType[], string, {
    state: State;
    extra: AxiosInstance;
}>(
  'fetchSimilarById',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<FilmType[]>(
      `${APIRoute.Films}/${filmId}${APIRoute.Similar}`
    );
    return data;
  }
);

export const postReview = createAsyncThunk<void, UserComment, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/postReviewById',
  async ({ comment, rating, filmId }, { extra: api }) => {
    await api.post<UserComment>(`${APIRoute.Comments}/${filmId}`, {
      comment,
      rating,
    });
  }
);

export const fetchPromoFilm = createAsyncThunk<FilmType, undefined, {
    state: State;
    extra: AxiosInstance;
}>(
  'fetchPromoFilm',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<FilmType>(APIRoute.Promo);
    return data;
  }
);

export const fetchFavoriteFilms = createAsyncThunk<FilmType[], undefined, {
    state: State;
    extra: AxiosInstance;
}>(
  'fetchFavoriteFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<FilmType[]>(APIRoute.Favorite);
    return data;
  }
);

export const changeFilmFavoriteStatus = createAsyncThunk<FilmType, { filmId: number; status: number }, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'changeFilmFavoriteStatus',
  async ({ filmId: id, status: isFavorite }, { dispatch, extra: api }) => {
    const { data } = await api.post<FilmType>(
      `${APIRoute.Favorite}/${id}/${isFavorite}`
    );

    return data;
  }
);

export const changePromoFavoriteStatus = createAsyncThunk<FilmType, { filmId: number; status: number }, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'changePromoFavoriteStatus',
  async ({ filmId: id, status: isFavorite }, { dispatch, extra: api }) => {
    const { data } = await api.post<FilmType>(
      `${APIRoute.Favorite}/${id}/${isFavorite}`
    );

    return data;
  }
);

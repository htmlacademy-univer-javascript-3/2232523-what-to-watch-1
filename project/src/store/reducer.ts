import { Reducer } from '../const';
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user-reducer/user-reducer';
import { filmReducer } from './film-reducer/film-reducer';
import { mainReducer } from './main-reducer/main-reducer';

const rootReducer = combineReducers({
  [Reducer.FILM_REDUCER]: filmReducer.reducer,
  [Reducer.MAIN_REDUCER]: mainReducer.reducer,
  [Reducer.USER_REDUCER]: userReducer.reducer
});

export { rootReducer };

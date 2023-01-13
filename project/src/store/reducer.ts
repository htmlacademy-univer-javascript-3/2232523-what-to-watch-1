import { Reducer } from '../const';
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user-reducer/user-reducer';
import { filmReducer } from './film-reducer/film-reducer';
import { mainReducer } from './main-reducer/main-reducer';

const rootReducer = combineReducers({
  [Reducer.filmReducer]: filmReducer.reducer,
  [Reducer.mainReducer]: mainReducer.reducer,
  [Reducer.userReducer]: userReducer.reducer
});

export { rootReducer };

import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user-reducer';
import { filmReducer } from './film-reducer';
import { mainReducer } from './main-reducer';
import { Reducer } from '../const';


const rootReducer = combineReducers({
  [Reducer.FILM_REDUCER]: filmReducer.reducer,
  [Reducer.MAIN_REDUCER]: mainReducer.reducer,
  [Reducer.USER_REDUCER]: userReducer.reducer
});

export { rootReducer };

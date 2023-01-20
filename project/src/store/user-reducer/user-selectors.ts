import { AuthorizationStatus, LogInState, Reducer } from '../../const';
import { State } from '../../types/app-state.type';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[Reducer.userReducer].authorizationStatus;
export const getLoginState = (state: State): LogInState => state[Reducer.userReducer].loginState;
export const getAvatar = (state: State): string | null => state[Reducer.userReducer].avatar;

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Similar = '/similar',
  Promo = '/promo'
}

export enum ReducerType {
  User = 'userReducer',
  Main = 'mainReducer',
  Film = 'filmReducer'
}

export const TIMEOUT_SHOW_ERROR = 2000;

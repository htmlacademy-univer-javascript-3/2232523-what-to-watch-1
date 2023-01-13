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
  Promo = '/promo',
  Favorite = '/favorite',
}

export enum Reducer {
  userReducer = 'USER_REDUCER',
  mainReducer = 'MAIN_REDUCER',
  filmReducer = 'FILM_REDUCER'
}

export enum LogInState {
  NoError,
  NotValidEmail,
  NotValidPassword,
  NotValidEmailAndPassword
}

export enum FilmTabs {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}


export const TIMEOUT_SHOW_ERROR = 2000;

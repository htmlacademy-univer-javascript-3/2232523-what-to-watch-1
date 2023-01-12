import React from 'react';
import { store } from './store';
import App from './components/app/app';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import Error from './components/error/error';
import { BrowserRouter } from 'react-router-dom';
import { fetchFilms, getAuthStatus, fetchPromoFilm } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(getAuthStatus());
store.dispatch(fetchFilms());
store.dispatch(fetchPromoFilm());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Error />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

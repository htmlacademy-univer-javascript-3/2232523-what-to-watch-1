import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchFilms, checkAuth } from './store/api-actions';
import Error from './components/error/error';

store.dispatch(fetchFilms());
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(checkAuth());
store.dispatch(fetchFilms());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Error/>
      <App reviews={[]}/>
    </Provider>
  </React.StrictMode>,
);

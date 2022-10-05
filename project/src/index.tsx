import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  NAME: 'ooo',
  GENRE: 'oo',
  DATE: '1954'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      name = {Setting.NAME}
      genre = {Setting.GENRE}
      date = {Setting.DATE}
    />
  </React.StrictMode>,
);

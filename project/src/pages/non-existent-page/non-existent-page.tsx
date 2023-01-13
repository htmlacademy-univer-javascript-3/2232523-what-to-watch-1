import React from 'react';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

function NonExistentPage(): JSX.Element {
  return (
    <React.Fragment>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>Назад на главную</Link>
    </React.Fragment>
  );
}
export default NonExistentPage;

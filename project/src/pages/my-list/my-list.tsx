import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import User from '../../components/user/user';
import { /*Reducer,*/ AuthorizationStatus } from '../../const';
import FilmCard from '../../components/film-card/film-card';
import { fetchFavoriteFilms } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';

export default function MyList() {
  const authorizationStatus = useAppSelector((state) => state.USER_REDUCER.authorizationStatus);
  const favoriteFilms = useAppSelector((state) => state.MAIN_REDUCER.favoriteFilms);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilms());
    }
  }, [authorizationStatus, dispatch]);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={'/'} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">
            My list <span className="user-page__film-count">9</span>
        </h1>
        <User/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {favoriteFilms.map((film) => <FilmCard key={film.id} film={film} posterSrc={film.previewImage}/>)}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to={'/'} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

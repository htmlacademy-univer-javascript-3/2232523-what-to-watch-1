import { useEffect } from 'react';
import User from '../../components/user/user';
import Logo from '../../components/logo/logo';
import { AuthorizationStatus } from '../../const';
import FilmCard from '../../components/film-card/film-card';
import { fetchFavoriteFilms } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-reducer/user-selectors';
import { getFavouriteFilms, getFavouriteCount } from '../../store/main-reducer/main-selectors';

export default function MyList() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteFilms = useAppSelector(getFavouriteFilms);
  const dispatch = useAppDispatch();
  const favCount = useAppSelector(getFavouriteCount);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilms());
    }
  }, [authorizationStatus, dispatch]);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">
            My list <span className="user-page__film-count">{favCount}</span>
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
        <Logo/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

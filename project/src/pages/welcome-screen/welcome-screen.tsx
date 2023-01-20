import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import User from '../../components/user/user';
import Logo from '../../components/logo/logo';
import { AuthorizationStatus } from '../../const';
import { setFavoriteCount } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import GenreFilter from '../../components/genre-filter/genre-filter';
import CatalogForMain from '../../components/catalog-for-main/catalog-for-main';
import { getAuthorizationStatus } from '../../store/user-reducer/user-selectors';
import { getPromo, getFavouriteCount } from '../../store/main-reducer/main-selectors';
import { fetchFavoriteFilms, changePromoFavoriteStatus } from '../../store/api-actions';

function WelcomeScreen(): JSX.Element {
  const promo = useAppSelector(getPromo);
  const favCount = useAppSelector(getFavouriteCount);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  const addHandler = () => {
    dispatch(changePromoFavoriteStatus({filmId: promo?.id || NaN, status: +(!promo?.isFavorite)}));
    if (promo?.isFavorite) {
      dispatch(setFavoriteCount(favCount - 1));
    } else {
      dispatch(setFavoriteCount(favCount + 1));
    }
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilms());
    }
  }, [authorizationStatus, dispatch]);

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo?.backgroundImage} alt={promo?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>
          <User/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promo?.posterImage} alt={`${promo?.name} poster`}
                width="218" height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo?.genre}</span>
                <span className="film-card__year">{promo?.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={`/player/${promo?.id}`}
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <button
                    className="btn btn--list film-card__button"
                    onClick={addHandler}
                  >
                    {promo?.isFavorite ? (
                      <svg viewBox="0 0 18 14" width="19" height="14">
                        <use xlinkHref="#in-list"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"/>
                      </svg>
                    )}
                    <span>My list</span>
                    <span className="film-card__count">{favCount}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreFilter/>
          <CatalogForMain/>
        </section>

        <footer className="page-footer">
          <Logo/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
export default WelcomeScreen;

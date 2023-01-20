import React from 'react';
import { useEffect } from 'react';
import User from '../../components/user/user';
import Logo from '../../components/logo/logo';
import { AuthorizationStatus } from '../../const';
import { Link, useParams } from 'react-router-dom';
import { setFavoriteCount } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import NonExistentPage from '../non-existent-page/non-existent-page';
import { getFavouriteCount } from '../../store/main-reducer/main-selectors';
import CatalogForFilm from '../../components/catalog-for-film/catalog-for-film';
import { getAuthorizationStatus } from '../../store/user-reducer/user-selectors';
import FilmDescription from '../../components/film-description/film-description';
import { getFilm, getReviews, getSimilarFilms } from '../../store/film-reducer/film-selectors';
import { fetchCommentsByID, fetchFilmByID, fetchSimilarByID, fetchFavoriteFilms, changeFilmFavoriteStatus } from '../../store/api-actions';

function Film(): JSX.Element {
  const id = Number(useParams().id);
  const film = useAppSelector(getFilm);
  const reviews = useAppSelector(getReviews);
  const favCount = useAppSelector(getFavouriteCount);
  const similarFilms = useAppSelector(getSimilarFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const sId = id.toString();
    dispatch(fetchFilmByID(sId));
    dispatch(fetchSimilarByID(sId));
    dispatch(fetchCommentsByID(sId));
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilms());
    }
  }, [id, dispatch, authorizationStatus]);

  const addHandler = () => {
    dispatch(changeFilmFavoriteStatus({filmId: film?.id || NaN, status: +(!film?.isFavorite)}));
    if (film?.isFavorite) {
      dispatch(setFavoriteCount(favCount - 1));
    } else {
      dispatch(setFavoriteCount(favCount + 1));
    }
  };

  if (!film) {
    return <NonExistentPage/>;
  }
  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
            <User/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={`/player/${film.id}`}
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
                    {film?.isFavorite ? (
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
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <Link
                    to={`/films/${film.id}/review`}
                    className="btn film-card__button"
                  >
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage}
                alt={`${film.name } poster`}
                width="218" height="327"
              />
            </div>
            <FilmDescription film={film} reviews={reviews}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <CatalogForFilm currentFilm={film} similarFilms={similarFilms}/>
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
export default Film;

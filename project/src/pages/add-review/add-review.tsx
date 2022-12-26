import { useEffect } from 'react';
import User from '../../components/user/user';
import { setDataIsLoading } from '../../store/action';
import { fetchFilmByID } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link, Navigate, useParams } from 'react-router-dom';
import ReviewForm from '../../components/review-form/review-form';
import { Reducer, AppRoute, AuthorizationStatus } from '../../const';


function AddReview(): JSX.Element {
  const id = Number(useParams().id);
  const film = useAppSelector((state) => state[Reducer.FILM_REDUCER].film);
  const authStatus = useAppSelector(
    (state) => state.USER_REDUCER.authorizationStatus
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setDataIsLoading(true));
    dispatch(fetchFilmByID(id.toString()));
    dispatch(setDataIsLoading(false));
  }, [id, dispatch]);

  if (authStatus === AuthorizationStatus.NoAuth) {
    return <Navigate to={AppRoute.Main} />;
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={film?.backgroundImage}
            alt={film?.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={'/'} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film?.id}`} className="breadcrumbs__link">{film?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${film?.id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <User/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={`${film?.name } poster`}
            width="218" height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm/>
      </div>
    </section>
  );
}
export default AddReview;

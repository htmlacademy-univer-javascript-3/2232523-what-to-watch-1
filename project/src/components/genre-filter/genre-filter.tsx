import { MouseEvent } from 'react';
import { getGenres } from '../../extra-functions/genre-functions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetShownFilms, changeGenre } from '../../store/action';
import { getFilms } from '../../store/main-reducer/main-selectors';
import { getCurrentGenre } from '../../store/main-reducer/main-selectors';

export default function GenreFilter() {
  const currentGenre = useAppSelector(getCurrentGenre);
  const films = useAppSelector(getFilms);
  const genres = getGenres(films);
  const dispatch = useAppDispatch();

  const genreSwitchHandler = (
    event: MouseEvent<HTMLAnchorElement>,
    genre: string
  ) => {
    event.preventDefault();
    dispatch(changeGenre({ currentGenre: genre }));
    dispatch(resetShownFilms());
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${
            currentGenre === genre && 'catalog__genres-item--active'
          }`}
        >
          <a
            href="/"
            className="catalog__genres-link"
            onClick={(event) => genreSwitchHandler(event, genre)}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

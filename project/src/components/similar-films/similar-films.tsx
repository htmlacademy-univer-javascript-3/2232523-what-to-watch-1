import { FilmType } from '../../types/film-type';
import { sortFilmsByGenre } from '../../extra-functions/genre-functions';
import { useAppSelector } from '../../hooks';
import FilmCard from '../film-card/film-card';

type SimilarFilmsProps = {
  similarFilms: FilmType[];
  currentFilm: FilmType;
};

function SimilarFilms(props: SimilarFilmsProps) {
  const films = useAppSelector((state) => state.films);

  return (
    <div className="catalog__films-list">
      {props.similarFilms
        .filter((film) => film.id !== props.currentFilm.id)
        .slice(0, 4)
        .map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            posterSrc={film.posterImage}
          />
        ))}
    </div>
  );
}

export default SimilarFilms;

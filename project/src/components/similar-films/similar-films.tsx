import { FilmType } from '../../types/film-type';
import { sortFilmsByGenre } from '../../extra-functions/genre-functions';
import { useAppSelector } from '../../hooks';
import FilmCard from '../film-card/film-card';

type SimilarFilmsProps = {
  currentFilm: FilmType;
};

export default function SimilarFilms(props: SimilarFilmsProps) {
  const films = useAppSelector((state) => state.films);

  return (
    <div className="catalog__films-list">
      {sortFilmsByGenre(films, props.currentFilm.genre)
        .filter((film) => film.name !== props.currentFilm.name)
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

import { FilmType } from '../../types/film-type';
import Catalog from '../catalog/catalog';

import { useState } from 'react';
import { sortFilmsByGenre } from '../../extra-functions/genre-functions';
import { useAppSelector } from '../../hooks';
import FilmCard from '../film-card/film-card';

type SimilarFilmsProps = {
  currentFilm: FilmType;
};

export default function SimilarFilms(props: SimilarFilmsProps) {
  const [highlightedFilm, setHighlightedFilm] = useState(NaN);
  const films = useAppSelector((state) => state.films);
  /*const mouseHoverHandler = (id: number) => {
    setHighlightedFilm(id);
  };*/

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
  )
  {/*return <Catalog films={props.films.filter((film) => film.genre === props.currentFilm.genre).filter((film) => props.currentFilmId !== film.id) />;*/}
}

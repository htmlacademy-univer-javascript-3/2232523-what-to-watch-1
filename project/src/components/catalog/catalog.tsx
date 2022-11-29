import FilmCard from '../film-card/film-card';
import {FilmType} from '../../types/film-type';
import React from 'react';
import { sortFilmsByGenre } from '../../extra-functions/genre-functions';
import { useAppSelector } from '../../hooks';

type CatalogProps = {
  films: FilmType[]
}

function Catalog({ films }: CatalogProps): JSX.Element {
  const currentGenre = useAppSelector((state) => state.currentGenre);
  return (
    <React.Fragment>
      {sortFilmsByGenre(films, currentGenre).map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          posterSrc={film.posterImage}
        />
      ))}
    </React.Fragment>
  );
}

export default Catalog;

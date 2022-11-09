import FilmCard from '../film-card/film-card';
import {FilmType} from '../../types/film-type';
import React from 'react';

type CatalogProps = {
  films: FilmType[]
}

function Catalog({ films }: CatalogProps): JSX.Element {
  return (
    <React.Fragment>
      {films.map((film) => (
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

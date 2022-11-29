import FilmCard from '../film-card/film-card';
import {FilmType} from '../../types/film-type';
import React from 'react';
import { useAppSelector } from '../../hooks';
import ShowMoreButton from '../show-more-button/show-more-button';

function Catalog(): JSX.Element {
  const filteredFilms = useAppSelector((state) => state.sortedFilms);
  const shownCount = useAppSelector((state) => state.shownCount);
  return (
    <React.Fragment>
      <div className="catalog__films-list">
        {filteredFilms.slice(0, shownCount).map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            posterSrc={film.posterImage}
          />
        ))}
      </div>
      <div className="catalog__more">
        {shownCount < filteredFilms.length && <ShowMoreButton />}
      </div>
    </React.Fragment>
  );
}

export default Catalog;

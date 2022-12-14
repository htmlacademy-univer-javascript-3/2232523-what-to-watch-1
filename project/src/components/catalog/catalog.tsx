import FilmCard from '../film-card/film-card';
import React from 'react';
import { Reducer } from '../../const';
import { useAppSelector } from '../../hooks';
import ShowMoreButton from '../show-more-button/show-more-button';

function Catalog(): JSX.Element {
  const sortedFilms = useAppSelector((state) => state[Reducer.MAIN_REDUCER].sortedFilms);
  const shownCount = useAppSelector((state) => state[Reducer.MAIN_REDUCER].shownCount);
  return (
    <React.Fragment>
      <div className="catalog__films-list">
        {sortedFilms.slice(0, shownCount).map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            posterSrc={film.posterImage}
          />
        ))}
      </div>
      <div className="catalog__more">
        {shownCount < sortedFilms.length && <ShowMoreButton />}
      </div>
    </React.Fragment>
  );
}

export default Catalog;

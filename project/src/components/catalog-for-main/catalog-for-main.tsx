import React from 'react';
import { Reducer } from '../../const';
import { useAppSelector } from '../../hooks';
import FilmCard from '../film-card/film-card';
import ShowMoreButton from '../show-more-button/show-more-button';

function CatalogForMain(): JSX.Element {
  const sortedFilms = useAppSelector((state) => state[Reducer.mainReducer].sortedFilms);
  const shownCount = useAppSelector((state) => state[Reducer.mainReducer].shownCount);
  return (
    <React.Fragment>
      <div className="catalog__films-list">
        {
          sortedFilms.slice(0, shownCount)
            .map((film) => (
              <FilmCard
                key={film.id}
                film={film}
                posterSrc={film.previewImage}
              />
            ))
        }
      </div>
      <div className="catalog__more">
        {shownCount < sortedFilms.length && <ShowMoreButton />}
      </div>
    </React.Fragment>
  );
}

export default CatalogForMain;

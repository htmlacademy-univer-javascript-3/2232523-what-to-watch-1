import React from 'react';
import { useAppSelector } from '../../hooks';
import FilmCard from '../film-card/film-card';
import ShowMoreButton from '../show-more-button/show-more-button';
import { getSortedFilms, getShownCount } from '../../store/main-reducer/main-selectors';

function CatalogForMain(): JSX.Element {
  const sortedFilms = useAppSelector(getSortedFilms);
  const shownCount = useAppSelector(getShownCount);
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

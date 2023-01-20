import FilmCard from '../film-card/film-card';
import { FilmType } from '../../types/film-type';

type CatalogForFilmProps = {
  currentFilm: FilmType;
  similarFilms: FilmType[];
}

function CatalogForFilm({currentFilm, similarFilms}: CatalogForFilmProps): JSX.Element {
  const similarFilmsOnPage = similarFilms
    .filter((film) => film.id !== currentFilm.id)
    .slice(0, 4);
  return (
    <div className="catalog__films-list">
      {
        similarFilmsOnPage
          .map((film) => (
            <FilmCard
              key={film.id}
              film={film}
              posterSrc={film.previewImage}
            />
          ))
      }
    </div>
  );
}

export default CatalogForFilm;

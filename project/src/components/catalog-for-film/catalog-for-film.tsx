import FilmCard from '../film-card/film-card';
import { FilmType } from '../../types/film-type';

type CatalogForFilmProps = {
  currentFilm: FilmType;
  similarFilms: FilmType[];
}

function CatalogForFilm({currentFilm, similarFilms}: CatalogForFilmProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {
        similarFilms.filter((film) => film.id !== currentFilm.id)
          .slice(0, 4)
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

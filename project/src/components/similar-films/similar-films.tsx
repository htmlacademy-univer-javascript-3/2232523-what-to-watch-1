import { FilmType } from '../../types/film-type';
import Catalog from '../catalog/catalog';

type SimilarFilmsProps = {
  currentFilm: FilmType;
  films: FilmType[];
  currentFilmId: number;
};

export default function SimilarFilms(props: SimilarFilmsProps) {
  return <Catalog films={props.films.filter((film) => film.genre === props.currentFilm.genre).filter((film) => props.currentFilmId !== film.id)} />;
}

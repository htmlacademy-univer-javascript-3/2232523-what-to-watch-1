import {FilmType} from '../types/film-type.js';

export function sortFilmsByGenre(films: FilmType[], genre: string): FilmType[] {
  return genre === 'All genres' ? films : films.filter((movies) => movies.genre === genre);
}

export const getGenres = (films: FilmType[]) => (
  [...new Set(['All genres', ...films.map((film) => film.genre)])]
);

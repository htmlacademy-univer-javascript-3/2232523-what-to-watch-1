import FilmCard from '../film-card/film-card';
import {FilmType} from '../../types/film-type';

type CatalogProps = {
  films: FilmType[]
}

function Catalog({ films }: CatalogProps): JSX.Element{
  return (
    <div className='catalog__films-list'>
      {films.map((film) => <FilmCard key={film.id} id={film.id} name={film.name} posterImage={film.posterImage}/>)}
    </div>);
}

export default Catalog;

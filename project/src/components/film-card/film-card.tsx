import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import {FilmType} from '../../types/film-type';
import VideoPlayer from '../video-player/video-player';
import { resetMainScreen } from '../../store/main-reducer/main-reducer';

type FilmCardProps = {
  film: FilmType;
  posterSrc: string;
};

export default function FilmCard(props: FilmCardProps) {
  const dispatch = useAppDispatch();
  const [activeFilm, setActiveFilm] = React.useState(NaN);

  return (
    <Link
      to={`/films/${props.film.id}`}
      className='small-film-card catalog__films-card small-film-card__link'
      data-testid='film-card'
      onClick={() => (dispatch(resetMainScreen()))}
      onMouseEnter={() => setActiveFilm(props.film.id)}
      onMouseLeave={() => setActiveFilm(NaN)}
    >
      <div className="small-film-card__image">
        {
          activeFilm === props.film.id
            ? (<VideoPlayer film={props.film}/>)
            : (<img src={props.posterSrc} alt={props.film.name} width='280' height='175'/>)
        }
      </div>
      <h3 className="small-film-card__title">
        {props.film.name}
      </h3>
    </Link>
  );
}

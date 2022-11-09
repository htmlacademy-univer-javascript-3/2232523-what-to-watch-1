import { Link } from 'react-router-dom';
import VideoPlayer from '../videoplayer/videoPlayer';
import {FilmType} from '../../types/film-type';
import React from 'react';

type FilmCardProps = {
  film: FilmType;
  posterSrc: string;
};

export default function FilmCard(props: FilmCardProps) {
  const [activeFilm, setActiveFilm] = React.useState(NaN);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setActiveFilm(props.film.id)}
      onMouseLeave={() => setActiveFilm(NaN)}
    >
      <div className="small-film-card__image">
        {activeFilm === props.film.id ? (
          <VideoPlayer film={props.film}/>
        ) : (
          <img src={props.posterSrc} alt={props.film.name} width={280} height={175}/>
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${props.film.id}`} className="small-film-card__link">
          {props.film.name}
        </Link>
      </h3>
    </article>
  );
}

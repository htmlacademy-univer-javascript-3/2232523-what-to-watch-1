import {Fragment} from 'react';

function convertTime(timeInMinutes: number): string {
  const hours = parseInt(String((timeInMinutes) / 60), 10);
  const minutes = timeInMinutes - hours * 60;

  const diffHours = `${hours.toString()}h`;
  const diffMinutes = `${minutes.toString().padStart(2,'0')}m`;

  if (hours === 0) {
    return diffMinutes;
  }

  return `${diffHours} ${diffMinutes}`;
}

type DetailsProps = {
  director: string,
  actors: string[],
  duration: number,
  genre: string,
  releaseYear: number
}

export default function Details(props: DetailsProps): JSX.Element {
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{props.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {props.actors.map((person) => <Fragment key={person}>{person}<br /></Fragment>)}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{convertTime(props.duration)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{props.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{props.releaseYear}</span>
        </p>
      </div>
    </div>
  );
}

import {Fragment} from 'react';
import { getRating } from '../../extra-functions/get-rating-function';

type OverviewProps = {
  rating: number,
  votesNumber: number,
  description: string,
  director: string,
  actors: string[]
}

export default function Overview(props: OverviewProps) {
  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{props.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRating(props.rating)}</span>
          <span className="film-rating__count">{props.votesNumber}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{props.description}</p>

        <p className="film-card__director"><strong>Director: {props.director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {props.actors.join(', ')} and other</strong>
        </p>
      </div>
    </Fragment>
  );
}

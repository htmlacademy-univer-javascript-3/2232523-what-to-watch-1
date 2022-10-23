import { Link } from 'react-router-dom';

type FilmCardProps = {
  id: number;
  name: string;
  posterImage: string;
}

function FilmCard(props : FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.posterImage} alt={props.name} width='280' height='175'/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${props.id}`} className="small-film-card__link">
          {props.name}
        </Link>
      </h3>
    </article>
  );
}
export default FilmCard;

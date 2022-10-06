type FilmCardProps = {
  source: string;
  alt: string;
}

function FilmCard({source, alt} : FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={`img/${source}.jpg`} alt={alt} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{alt}</a>
      </h3>
    </article>
  );
}
export default FilmCard;

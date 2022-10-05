import FilmCard from '../../components/film-card/film-card';
import React from 'react';

type WelcomeScreenProps = {
  name: string;
  genre: string;
  date: string;
}

type FilmCard = {source: string; alt: string};

const filmsCards: FilmCard[] = [
  { source: 'fantastic-beasts-the-crimes-of-grindelwald', alt: 'Fantastic Beasts: The Crimes of Grindelwald' },
  { source: 'bohemian-rhapsody', alt: 'Bohemian Rhapsody' },
  { source: 'macbeth', alt: 'Macbeth' },
  { source: 'aviator', alt: 'Aviator' },
  { source: 'we-need-to-talk-about-kevin', alt: 'We need to talk about Kevin' },
  { source: 'what-we-do-in-the-shadows', alt: 'What We Do in the Shadows' },
  { source: 'revenant', alt: 'Revenant' },
  { source: 'johnny-english', alt: 'Johnny English' },
  { source: 'shutter-island', alt: 'Shutter Island' },
  { source: 'pulp-fiction', alt: 'Pulp Fiction' },
  { source: 'no-country-for-old-men', alt: 'No Country for Old Men' },
  { source: 'snatch', alt: 'Snatch' },
  { source: 'moonrise-kingdom', alt: 'Moonrise Kingdom' },
  { source: 'seven-years-in-tibet', alt: 'Seven Years in Tibet' },
  { source: 'midnight-special', alt: 'Midnight Special' },
  { source: 'war-of-the-worlds', alt: 'War of the Worlds' },
  { source: 'dardjeeling-limited', alt: 'Dardjeeling Limited' },
  { source: 'orlando', alt: 'Orlando' },
  { source: 'mindhunter', alt: 'Mindhunter' },
  { source: 'midnight-special', alt: 'Midnight Special' },
];

const getFilmContent = (fCards: FilmCard[]) => {
  const content = [];
  for (const filmCard of fCards)
  {content.push(<FilmCard source={filmCard.source} alt={filmCard.alt}/>);}
  return content;
};

function WelcomeScreen({name, genre, date} : WelcomeScreenProps): JSX.Element {
  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster"
                width="218" height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{date}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list"> {getFilmContent(filmsCards)} </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
export default WelcomeScreen;

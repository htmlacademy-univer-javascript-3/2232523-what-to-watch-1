import Tabs from '../tabs/tabs';
import { useState } from 'react';
import { FilmTabs } from '../../const';
import Details from '../details/details';
import Overview from '../overview/overview';
import ReviewsList from '../reviews-list/reviews-list';
import { FilmType, Review } from '../../types/film-type';

type FilmDescProps = {
  film: FilmType;
  reviews: Review[];
}

function FilmDescription({film, reviews}: FilmDescProps): JSX.Element {
  const [pageTab, setPageTab] = useState<string>(FilmTabs.Overview);

  return (
    <div className="film-card__desc">
      <Tabs
        currentTab={pageTab}
        updateTab={(tabName: string) => {
          setPageTab(tabName);
        }}
      />
      {
        pageTab === FilmTabs.Overview &&
        <Overview
          rating={film.rating}
          votesNumber={film.scoresCount}
          description={film.description}
          director={film.director}
          actors={film.starring}
        />
      }
      {
        pageTab === FilmTabs.Details &&
        <Details
          director={film.director}
          actors={film.starring}
          duration={film.runTime}
          genre={film.genre}
          releaseYear={film.released}
        />
      }
      {pageTab === FilmTabs.Reviews && <ReviewsList reviews={reviews} />}
    </div>
  );
}

export default FilmDescription;

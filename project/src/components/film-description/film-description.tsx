import Tabs from '../tabs/tabs';
import { FilmType, Review } from '../../types/film-type';
import { useState } from 'react';
import Details from '../details/details';
import ReviewsList from '../reviews-list/reviews-list';
import Overview from '../overview/overview';

export enum FilmTabs {
  OverviewT = 'Overview',
  DetailsT = 'Details',
  ReviewsT = 'Reviews'
}

type FilmDescProps = {
  film: FilmType;
  reviews: Review[];
}

function FilmDescription({film, reviews}: FilmDescProps): JSX.Element {
  const [pageTab, setPageTab] = useState<string>(FilmTabs.OverviewT);

  return (
    <div className="film-card__desc">
      <Tabs
        currentTab={pageTab}
        updateTab={(tabName: string) => {
          setPageTab(tabName);
        }}
      />
      {
        pageTab === FilmTabs.OverviewT &&
        <Overview
          rating={film.rating}
          votesNumber={film.scoresCount}
          description={film.description}
          director={film.director}
          actors={film.starring}
        />
      }
      {
        pageTab === FilmTabs.DetailsT &&
        <Details
          director={film.director}
          actors={film.starring}
          duration={film.runTime}
          genre={film.genre}
          releaseYear={film.released}
        />
      }
      {pageTab === FilmTabs.ReviewsT && <ReviewsList reviews={reviews} />}
    </div>
  );
}

export default FilmDescription;

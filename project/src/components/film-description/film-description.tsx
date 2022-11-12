import Tabs from '../tabs/tabs';
import { FilmType } from '../../types/film-type';
import { useState } from 'react';
import Details from '../details/details';
import Reviews from '../reviews-list/reviews-list';
import Overview from '../overview/overview';

export enum FilmTabs {
  OverviewT = 'Overview',
  DetailsT = 'Details',
  ReviewsT = 'Reviews'
}

type FilmDescProps = {
  film: FilmType;
}

function FilmDescription({film}: FilmDescProps): JSX.Element {
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
          votesNumber={film.votesNumber}
          description={film.description}
          director={film.director}
          actors={film.actors}
        />
      }
      {
        pageTab === FilmTabs.DetailsT &&
        <Details
          director={film.director}
          actors={film.actors}
          duration={film.duration}
          genre={film.genre}
          releaseYear={film.releaseYear}
        />
      }
      {pageTab === FilmTabs.ReviewsT && <Reviews film={film} />}
    </div>
  );
}

export default FilmDescription;

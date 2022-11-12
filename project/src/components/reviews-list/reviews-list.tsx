import ReviewCard from '../review-card/review-card';
import { FilmType } from '../../types/film-type';

type ReviewsListProps = {
  film: FilmType;
};

export default function ReviewsList(props: ReviewsListProps) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {props.film.reviews.map((review) => (
          <ReviewCard
            key={review.id}
            postedDate={review.date}
            reviewText={review.text}
            reviewRating={review.rating}
            reviewAuthor={review.author}
          />
        ))}
      </div>
    </div>
  );
}

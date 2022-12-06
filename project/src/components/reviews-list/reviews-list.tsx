import ReviewCard from '../review-card/review-card';
import { Review } from '../../types/film-type';

type ReviewsListProps = {
  reviews: Review[];
};

export default function ReviewsList(props: ReviewsListProps) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {props.reviews.map((review) => (
          <ReviewCard
            key={review.id}
            postedDate={review.date}
            reviewText={review.comment}
            reviewRating={review.rating}
            reviewAuthor={review.user}
          />
        ))}
      </div>
    </div>
  );
}

type ReviewCardProps = {
  postedDate: string;
  reviewText: string;
  reviewRating: number;
  reviewAuthor: {id: number, name: string;}
}

export default function ReviewCard(props: ReviewCardProps) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {props.reviewText}
        </p>

        <footer className="review__details">
          <cite className="review__author">{props.reviewAuthor.name}</cite>
          <time className="review__date" dateTime={props.postedDate}>
            {props.postedDate}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{props.reviewRating}</div>
    </div>
  );
}

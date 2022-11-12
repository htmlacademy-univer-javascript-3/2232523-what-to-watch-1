/*function convertDate(date: string, isShortForm: boolean): string {
  const dateFormat = new Date(date);

  if (isShortForm) {
    return (
      `${dateFormat.getFullYear()}-
      ${dateFormat.getMonth().toString().padStart(2, '0')}-
      ${dateFormat.getDate().toString().padStart(2, '0')}`
    );
  }

  return (
    `${dateFormat.toLocaleString(
      'eng',
      { month: 'long' })} ${dateFormat.getDate()}, ${dateFormat.getFullYear()}`
  );
}*/

type ReviewCardProps = {
  postedDate: string;
  reviewText: string;
  reviewRating: number;
  reviewAuthor: string;
}

export default function ReviewCard(props: ReviewCardProps) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {props.reviewText}
        </p>

        <footer className="review__details">
          <cite className="review__author">{props.reviewAuthor}</cite>
          <time className="review__date" dateTime={props.postedDate}>
            {/*{convertDate(props.postedDate, true)}>*/}
            {/*{convertDate(props.postedDate, false)}*/}
            {props.postedDate}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{props.reviewRating}</div>
    </div>
  );
}

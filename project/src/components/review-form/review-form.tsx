import { AxiosError } from 'axios';
import { useAppDispatch } from '../../hooks';
import { unwrapResult } from '@reduxjs/toolkit';
import { postReview } from '../../store/api-actions';
import { handleError } from '../../services/error-handle';
import { useNavigate, useParams } from 'react-router-dom';
import { ChangeEvent, FormEvent, Fragment, useState, useCallback } from 'react';

export default function ReviewForm() {
  const id = Number(useParams().id).toString();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [starRating, setStarRating] = useState(NaN);
  const [reviewContent, setReviewContent] = useState('');
  const [isReviewError, setIsReviewError] = useState(true);
  const [isRatingError, setIsRatingError] = useState(true);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const updateRating = useCallback(
    (evt: ChangeEvent<HTMLInputElement>, starR: string) => {
      setStarRating(parseInt(starR, 10));
      setIsRatingError(!evt.target.value);
    },
    []
  );
  const updateReview = useCallback(
    (evt: ChangeEvent<HTMLTextAreaElement>, reviewC: string) => {
      setReviewContent(reviewC);
      const reviewText = evt.target.value.length;
      setIsReviewError(reviewText < 50 || reviewText > 400);
    },
    []
  );

  const reviewSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsFormDisabled(true);
    dispatch(postReview({comment: reviewContent, rating: starRating, filmId: id}))
      .then(unwrapResult)
      .then(() => {
        navigate(`/films/${id}`);
      })
      .catch((error: AxiosError) => {
        const errorText = error.response?.data.error;
        handleError(`Ошибка:\n ${errorText}`);
        setIsFormDisabled(false);
      });
  };

  return (
    <form action="#" className="add-review__form" onSubmit={reviewSubmitHandler}>
      <div className="rating" >
        <div className="rating__stars">
          {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((rating) => (
            <Fragment key={rating}>
              <input
                className="rating__input"
                id={`star-${rating}`}
                type="radio"
                name="rating"
                value={rating.toString()}
                disabled={isFormDisabled}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  updateRating(evt, evt.target.value);
                }}
              />
              <label className="rating__label" htmlFor={`star-${rating}`}>
                Rating {rating}
              </label>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder={'Review Text'}
          value={reviewContent}
          disabled={isFormDisabled}
          onChange={(evt: ChangeEvent<HTMLTextAreaElement>) => {
            updateReview(evt, evt.target.value);
          }}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isFormDisabled || isReviewError || isRatingError}>
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

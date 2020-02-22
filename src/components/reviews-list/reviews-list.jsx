import React from "react";
import PropTypes from "prop-types";
import {Review} from "../review/review";

export const ReviewsList = ({reviews}) => {
  reviews.sort((a, b) => b.date - a.date);

  const reviewsList = reviews.slice(0, 10).map((review, index) =>
    <Review
      key={review.text + index}
      id={review.id}
      rating={review.rating}
      avatar={review.avatar}
      date={review.date}
      name={review.name}
      text={review.text}
    />
  );

  return (
    <ul className="reviews__list">
      {reviewsList}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      date: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

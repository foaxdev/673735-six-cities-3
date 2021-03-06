import React from "react";
import PropTypes from "prop-types";
import {Review} from "../review/review";
import {connect} from "react-redux";

export const ReviewsList = ({detailedOfferReviews}) => {
  detailedOfferReviews.sort((a, b) => b.date - a.date);

  const reviewsList = detailedOfferReviews.slice(0, 10).map((review, index) =>
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
  detailedOfferReviews: PropTypes.arrayOf(
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

const mapStateToProps = (state) => ({
  detailedOfferReviews: state.detailedOfferReviews
});

export default connect(mapStateToProps)(ReviewsList);

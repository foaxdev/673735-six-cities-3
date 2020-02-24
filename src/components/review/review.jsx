import React from "react";
import PropTypes from "prop-types";
import {formatDate, formatDatetime} from "../../utils/format";

export const Review = ({avatar, name, rating, date, text}) => {
  const ratingPercentage = `${rating * 100 / 5}%`;
  const dateTime = formatDatetime(date);
  const dateText = formatDate(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingPercentage}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={dateTime}>{dateText}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

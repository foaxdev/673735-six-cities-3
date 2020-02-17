import React from "react";
import {Main} from "../main/main";
import PropTypes from "prop-types";

export const App = (props) => {
  return (
    <Main quantity={props.quantity} offers={props.offers} onCardHover={props.onCardHover}/>
  );
};

App.propTypes = {
  quantity: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    photoSrc: PropTypes.string.isRequired,
  })).isRequired,
  onCardHover: PropTypes.func.isRequired
};

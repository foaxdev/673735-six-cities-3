import React from "react";
import {Main} from "../main/main";
import PropTypes from "prop-types";

export const App = (props) => {
  return (
    <Main quantity={props.quantity} offers={props.offers}/>
  );
};

App.propTypes = {
  quantity: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.string).isRequired
};
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Apartment} from "../apartment/apartment";

export class ApartmentsList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      activeCard: -1
    };
  }

  render() {
    const {offers, onCardHover} = this.props;

    return offers.map((offer, index) =>
      <Apartment
        key={offer + index}
        offer={offer}
        onCardHover={onCardHover}
      />
    );
  }
}


ApartmentsList.propTypes = {
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

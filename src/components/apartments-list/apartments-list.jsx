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
    const {offers, mainClass, showPremium, onCardHover, onHeaderClick} = this.props;

    return offers.map((offer, index) =>
      <Apartment
        index={index}
        key={offer + index}
        offer={offer}
        showPremium={showPremium}
        mainClass={mainClass}
        onCardHover={onCardHover}
        onHeaderClick={onHeaderClick}
      />
    );
  }
}


ApartmentsList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isPremium: PropTypes.bool.isRequired,
      isFavourite: PropTypes.bool.isRequired,
      rating: PropTypes.number.isRequired,
      photos: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
      })).isRequired,
      description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      bedrooms: PropTypes.number.isRequired,
      guests: PropTypes.number.isRequired,
      amenities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      host: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isSuper: PropTypes.bool.isRequired
      }).isRequired,
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
    })
  ).isRequired,
  mainClass: PropTypes.string.isRequired,
  showPremium: PropTypes.bool.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired
};

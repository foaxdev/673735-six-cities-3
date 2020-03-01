import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Apartment from "../apartment/apartment";
import {connect} from "react-redux";

export class ApartmentsList extends PureComponent {

  render() {

    return this.props.offersByCity.map((offer, index) =>
      <Apartment
        index={index}
        key={offer + index}
        offer={offer}
      />
    );
  }
}


ApartmentsList.propTypes = {
  offersByCity: PropTypes.arrayOf(
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
      }).isRequired
  ).isRequired
};

const mapStateToProps = (state) => ({
  offersByCity: state.offersByCity
});

export default connect(mapStateToProps)(ApartmentsList);

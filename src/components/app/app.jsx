import React, {PureComponent} from "react";
import {Main} from "../main/main";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ApartmentDetailed} from "../apartment-detailed/apartment-detailed";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";

export class App extends PureComponent {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderScreen()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _getObjectDataByCity(city) {
    for (let i = 0; i < this.props.offers.length; i++) {
      if (this.props.offers[i].city === city) {
        return this.props.offers[i];
      }
    }

    return null;
  }

  _getAllCities() {
    const allCities = [];

    for (let i = 0; i < this.props.offers.length; i++) {
      allCities.push(this.props.offers[i].city);
    }

    return allCities;
  }

  _renderScreen() {
    if (this.props.currentPage === -1) {
      const cityData = this._getObjectDataByCity(this.props.currentCity);

      return (
        <Main
          quantity={cityData.offers.length}
          cityCoordinates={cityData.cityCoordinates}
          markerCoordinates={cityData.markerCoordinates}
          cities={this._getAllCities()}
          currentCity={this.props.currentCity}
          offers={cityData.offers}
          onCardHover={this.props.onCardHover}
          onHeaderClick={this.props.onHeaderClick}
          onCityClick={this.props.onCityClick}
        />
      );
    } else {
      return (
        <ApartmentDetailed
          offer={this._getObjectDataByCity(this.props.currentCity).offers[this.props.currentPage]}
          offersNearby={this.props.offersNearby}
          onOfferCardHover={this.props.onOfferCardHover}
          onOfferCardHeaderClick={this.props.onHeaderClick}
        />
      );
    }
  }
}

App.propTypes = {
  currentCity: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    cityCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    markerCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    offers: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isPremium: PropTypes.bool.isRequired,
      isFavourite: PropTypes.bool.isRequired,
      rating: PropTypes.number.isRequired,
      photoSrc: PropTypes.string.isRequired,
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
    })).isRequired
  })).isRequired,
  offersNearby: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    photoSrc: PropTypes.string.isRequired,
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
  })).isRequired,
  onCardHover: PropTypes.func.isRequired,
  onOfferCardHover: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  offersNearby: state.offersNearby,
  currentPage: state.currentPage,
  currentCity: state.currentCity
});

const mapDispatchToProps = (dispatch) => ({
  onHeaderClick(newPage) {
    dispatch(ActionCreator.changeCurrentPage(newPage));
  },
  onCityClick(newCity) {
    dispatch(ActionCreator.changeCity(newCity));
  },
  onCardHover() {

  },
  onOfferCardHover() {

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

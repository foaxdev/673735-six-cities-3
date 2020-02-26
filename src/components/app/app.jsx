import React, {PureComponent} from "react";
import {Main} from "../main/main";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ApartmentDetailed} from "../apartment-detailed/apartment-detailed";

export class App extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: -1,
      city: this.props.currentCity
    };
    this.onHeaderClick = this.onHeaderClick.bind(this);
    this.onCityClick = this.onCityClick.bind(this);
  }

  onHeaderClick(newPage) {
    this.setState({
      currentPage: newPage
    });
  }

  onCityClick(newCity) {
    this.setState({
      city: newCity
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderScreen()}
          </Route>
          <Route exact path="/offer">
            <ApartmentDetailed
              offer={this._getObjectDataByCity(this.state.city).offers[0]}
              offersNearby={this.props.offersNearby}
              onOfferCardHover={this.props.onOfferCardHover}
              onOfferCardHeaderClick={this.onHeaderClick}
            />
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
    if (this.state.currentPage === -1) {
      const cityData = this._getObjectDataByCity(this.state.city);

      console.log(cityData.cityCoordinates);
      console.log(cityData.markerCoordinates);

      return (
        <Main
          quantity={cityData.offers.length}
          cityCoordinates={cityData.cityCoordinates}
          markerCoordinates={cityData.markerCoordinates}
          cities={this._getAllCities()}
          currentCity={this.state.city}
          offers={cityData.offers}
          onCardHover={this.props.onCardHover}
          onHeaderClick={this.onHeaderClick}
          onCityClick={this.onCityClick}
        />
      );
    } else {
      return (
        <ApartmentDetailed
          offer={this._getObjectDataByCity(this.state.city).offers[this.state.currentPage]}
          offersNearby={this.props.offersNearby}
          onOfferCardHover={this.props.onOfferCardHover}
          onOfferCardHeaderClick={this.onHeaderClick}
        />
      );
    }
  }
}

App.propTypes = {
  currentCity: PropTypes.string.isRequired,
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
  onOfferCardHover: PropTypes.func.isRequired
};

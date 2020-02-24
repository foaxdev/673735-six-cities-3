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
      city: this.props.offers[0].city
    };
    this.onHeaderClick = this.onHeaderClick.bind(this);
    this.onCityClick = this.onCityClick(this);
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
            <ApartmentDetailed offer={this.props.offers[0]}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderScreen() {
    if (this.state.currentPage === -1) {
      const availableCities = Array.from(new Set(this.props.offers.map((offer) => offer.city))).slice(0, 6);
      const offersByCity = this.props.offers.map((offer) => offer.city === this.state.city);
      const quantityOfOffersByCity = this.props.offers.map((offer) => offer.city === this.state.city).length;

      return (
        <Main
          quantity={quantityOfOffersByCity}
          cityCoordinates={this.props.cityCoordinates}
          offerCoordinates={this.props.offerCoordinates}
          cities={availableCities}
          offers={offersByCity}
          onCardHover={this.props.onCardHover}
          onHeaderClick={this.onHeaderClick}
          onCityClick={this.onCityClick}
        />
      );
    } else {
      return (<ApartmentDetailed offer={this.props.offers[this.state.currentPage]}/>);
    }
  }
}

App.propTypes = {
  cityCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  offerCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    photoSrc: PropTypes.string.isRequired,
  })).isRequired,
  onCardHover: PropTypes.func.isRequired
};

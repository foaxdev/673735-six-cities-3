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
    };
    this.onHeaderClick = this.onHeaderClick.bind(this);
  }

  onHeaderClick(newPage) {
    this.setState({
      currentPage: newPage
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
      return (
        <Main
          quantity={this.props.quantity}
          city={this.props.city}
          offerCoordinates={this.props.offerCoordinates}
          offers={this.props.offers}
          onCardHover={this.props.onCardHover}
          onHeaderClick={this.onHeaderClick}
        />
      );
    } else {
      return (<ApartmentDetailed offer={this.props.offers[this.state.currentPage]}/>);
    }
  }
}

App.propTypes = {
  quantity: PropTypes.number.isRequired,
  city: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  offerCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
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

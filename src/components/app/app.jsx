import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ApartmentDetailed from "../apartment-detailed/apartment-detailed";
import {connect} from "react-redux";
import MainEmpty from "../main-empty/main-empty";

export class App extends React.PureComponent {

  _renderScreen() {
    if (this.props.currentPage === -1) {
      return (this.props.offersByCityQuantity > 0 ? <Main /> : <MainEmpty />);
    } else {
      return (
        <ApartmentDetailed />
      );
    }
  }

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
}

App.propTypes = {
  offersByCityQuantity: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  offersByCityQuantity: state.offersByCityQuantity,
  currentPage: state.currentPage
});

export default connect(mapStateToProps)(App);

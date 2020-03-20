import React from "react";
import PropTypes from "prop-types";
import CitiesList from "../cities-list/cities-list";
import {connect} from "react-redux";
import {withActiveItem} from "../../hocs/with-active-item";

export class MainEmpty extends React.PureComponent {

  render() {

    const CitiesListWrapped = withActiveItem(CitiesList);

    return (<main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesListWrapped />
        </section>
      </div>
      <div className="cities" style={{minHeight: `85vh`}}>
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property availbale at the moment in
                Dusseldorf</p>
            </div>
          </section>
          <div className="cities__right-section" />
        </div>
      </div>
    </main>);
  }
}

MainEmpty.propTypes = {
  offersByCityQuantity: PropTypes.number.isRequired,
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offersByCityQuantity: state.offersByCityQuantity
});

export default connect(mapStateToProps)(MainEmpty);

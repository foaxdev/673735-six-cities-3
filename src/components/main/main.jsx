import React from "react";
import PropTypes from "prop-types";
import ApartmentsList from "../apartments-list/apartments-list";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import SortVariants from "../sort-variants/sort-variants";
import {connect} from "react-redux";
import {withActiveItem} from "../../hocs/with-active-item";

export class Main extends React.PureComponent {

  render() {
    const {offersByCityQuantity, currentCity} = this.props;

    const CitiesListWrapped = withActiveItem(CitiesList);
    const ApartmentsListWrapped = withActiveItem(ApartmentsList);

    return (<main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesListWrapped />
        </section>
      </div>
      <div className="cities" style={{minHeight: `85vh`}}>
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersByCityQuantity} places to stay in {currentCity}</b>
            <SortVariants />
            <div className="cities__places-list places__list tabs__content">{<ApartmentsListWrapped />}</div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">{<Map />}</section>
          </div>
        </div>
      </div>
    </main>);
  }
}

Main.propTypes = {
  offersByCityQuantity: PropTypes.number.isRequired,
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offersByCityQuantity: state.offersByCityQuantity
});

export default connect(mapStateToProps)(Main);

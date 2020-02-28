import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ApartmentsList from "../apartments-list/apartments-list";
import {Map} from "../map/map";
import {CitiesList} from "../cities-list/cities-list";
import SortVariants from "../sort-variants/sort-variants";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

export class Main extends PureComponent {

  render() {
    const {offersByCityQuantity, coordinatesOfOffersByCity, cityCoordinates, markerCoordinates, cities, currentCity, onCityClick} = this.props;
    const mainContainerClass = offersByCityQuantity > 0 ? `cities__places-container container` : `cities__places-container cities__places-container--empty container`;
    const mainClass = offersByCityQuantity > 0 ? `page__main page__main--index` : `page__main page__main--index page__main--index-empty`;

    return (<main className={mainClass}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList cities={cities} currentCity={currentCity} onCityClick={onCityClick}/>
        </section>
      </div>
      <div className="cities" style={{minHeight: `85vh`}}>
        <div className={mainContainerClass}>
          {
            (offersByCityQuantity > 0)
              ? <React.Fragment>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersByCityQuantity} places to stay in {currentCity}</b>
                  <SortVariants />
                  <div className="cities__places-list places__list tabs__content">{<ApartmentsList mainClass={`cities`} showPremium={true}/>}</div>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">{<Map cityCoordinates={cityCoordinates} availableOffers={coordinatesOfOffersByCity} markerCoordinates={markerCoordinates}/>}</section>
                </div>
              </React.Fragment>
              : <React.Fragment>
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
                  </div>
                </section>
                <div className="cities__right-section"/>
              </React.Fragment>
          }
        </div>
      </div>
    </main>);
  }
}

Main.propTypes = {
  offersByCityQuantity: PropTypes.number.isRequired,
  coordinatesOfOffersByCity: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  cityCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  markerCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offersByCityQuantity: state.offersByCityQuantity,
  coordinatesOfOffersByCity: state.coordinatesOfOffersByCity
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(newCity) {
    dispatch(ActionCreator.changeCity(newCity));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

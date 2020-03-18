import React from "react";
import PropTypes from "prop-types";
import ApartmentsList from "../apartments-list/apartments-list";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import SortVariants from "../sort-variants/sort-variants";
import {connect} from "react-redux";
import {withActiveItem} from "../../hoc/withActiveItem";

export class Main extends React.PureComponent {

  render() {
    const {offersByCityQuantity, currentCity} = this.props;
    const mainContainerClass = offersByCityQuantity > 0 ? `cities__places-container container` : `cities__places-container cities__places-container--empty container`;
    const mainClass = offersByCityQuantity > 0 ? `page__main page__main--index` : `page__main page__main--index page__main--index-empty`;

    const CitiesListWrapped = withActiveItem(CitiesList);
    const ApartmentsListWrapped = withActiveItem(ApartmentsList);

    return (<main className={mainClass}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesListWrapped />
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
                  <div className="cities__places-list places__list tabs__content">{<ApartmentsListWrapped />}</div>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">{<Map />}</section>
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
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offersByCityQuantity: state.offersByCityQuantity
});

export default connect(mapStateToProps)(Main);

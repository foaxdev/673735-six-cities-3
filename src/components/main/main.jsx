import React from "react";
import PropTypes from "prop-types";
import {ApartmentsList} from "../apartments-list/apartments-list";
import {Map} from "../map/map";
import {CitiesList} from "../cities-list/cities-list";

export const Main = ({quantity, cityCoordinates, offerCoordinates, cities, currentCity, offers, onCardHover, onHeaderClick, onCityClick}) => {
  const coordinates = offers.map((offer) => offer.coordinates);

  return <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <section className="locations container">
        <CitiesList cities={cities} currentCity={currentCity} onCityClick={onCityClick}/>
      </section>
    </div>
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{quantity} places to stay in {currentCity}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"/>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">{<ApartmentsList offers={offers} mainClass={`cities`} showPremium={true} onCardHover={onCardHover} onHeaderClick={onHeaderClick}/>}</div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">{<Map cityCoordinates={cityCoordinates} availableOffers={coordinates} offerCoordinates={offerCoordinates}/>}</section>
        </div>
      </div>
    </div>
  </main>;
};

Main.propTypes = {
  quantity: PropTypes.number.isRequired,
  cityCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  offerCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentCity: PropTypes.string.isRequired,
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
  })).isRequired,
  onCardHover: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired
};

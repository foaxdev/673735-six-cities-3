import React from "react";
import PropTypes from "prop-types";

export const CitiesList = ({cities, currentCity, onCityClick}) => {

  const listOfCities = cities.map((city) =>
    <li className="locations__item" key={city}>
      <a className={city === currentCity ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#" onClick={() => onCityClick(city)}>
        <span>{city}</span>
      </a>
    </li>
  );

  return (
    <ul className="locations__list tabs__list">
      {listOfCities}
    </ul>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired
};

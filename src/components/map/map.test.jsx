import React from 'react';
import renderer from 'react-test-renderer';
import Map from "./map";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const TEST_CURRENT_CITY_COORDINATES = [52.38333, 4.9];
const TEST_CURRENT_CITY_MARKER_COORDINATES = [52.3709553943508, 4.89309666406198];
const TEST_COORDINATES_OF_OFFERS_BY_CITY = [
  {
    id: 0,
    coordinates: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 1,
    coordinates: [52.369553943508, 4.85309666406198]
  },
  {
    id: 2,
    coordinates: [52.3909553943508, 4.929309666406198]
  },
  {
    id: 3,
    coordinates: [52.3809553943508, 4.939309666406198]
  }
];

it(`Should render main Map correctly`, () => {
  const store = mockStore({
    currentCityCoordinates: TEST_CURRENT_CITY_COORDINATES,
    coordinatesOfOffersByCity: TEST_COORDINATES_OF_OFFERS_BY_CITY,
    currentCityMarkerCoordinates: TEST_CURRENT_CITY_MARKER_COORDINATES,
    activeMarkerIndex: 0,
    currentPage: -1,
    currentCity: `Amsterdam`
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Map />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

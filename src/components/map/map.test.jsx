import React from 'react';
import renderer from 'react-test-renderer';
import {Map} from "./map";

const CITY = [52.38333, 4.9];
const MARKER_COORDINATES = [52.3709553943508, 4.89309666406198];
const AVAILABLE_OFFERS = [
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198]
];

it(`Should render main Map correctly`, () => {
  const tree = renderer
    .create(<Map
      cityCoordinates={CITY}
      availableOffers={AVAILABLE_OFFERS}
      markerCoordinates={MARKER_COORDINATES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

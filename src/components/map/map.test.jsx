import React from 'react';
import renderer from 'react-test-renderer';
import {Map} from "./map";

const CITY = [52.38333, 4.9];
const OFFER_COORDINATES = [52.3709553943508, 4.89309666406198];

it(`Should render main Map correctly`, () => {
  const tree = renderer
    .create(<Map
      cityCoordinates={CITY}
      offerCoordinates={OFFER_COORDINATES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesList} from "./cities-list";

const TEST_HANDLER = () => {};
const TEST_CITIES = [`Japan`, `Korea`, `China`, `Singapore`];
const TEST_CURRENT_CITY = `Japan`;

it(`Should render Cities List correctly`, () => {
  const tree = renderer
    .create(
        <CitiesList
          onCityClick={TEST_HANDLER}
          cities={TEST_CITIES}
          currentCity={TEST_CURRENT_CITY}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

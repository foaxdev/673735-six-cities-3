import React from 'react';
import renderer from 'react-test-renderer';
import {App} from "./app";

const TEST_OFFERS_QUANTITY = 500;
const TEST_OFFERS = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Modern apartment`, `Something cool`];

it(`Should render Apartment item correctly`, () => {
  const tree = renderer
    .create(<App
      quantity={TEST_OFFERS_QUANTITY}
      offers={TEST_OFFERS}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
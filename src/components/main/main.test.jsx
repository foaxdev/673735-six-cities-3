import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from "./main";

const TEST_OFFERS_QUANTITY = 500;
const TEST_OFFERS = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Modern apartment`, `Something cool`];

it(`Should render Main screen correctly`, () => {
  const tree = renderer
    .create(<Main
      quantity={TEST_OFFERS_QUANTITY}
      offers={TEST_OFFERS}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

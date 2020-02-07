import React from 'react';
import renderer from 'react-test-renderer';
import {Apartment} from "./apartment";

const TEST_OFFER_TITLE = `Perfect apartment`;
const TEST_HEADER_CLICK_HANDLER = () => {};

it(`Should render Apartment item correctly`, () => {
  const tree = renderer
    .create(<Apartment
      offer={TEST_OFFER_TITLE}
      onHeaderButtonClick={TEST_HEADER_CLICK_HANDLER}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

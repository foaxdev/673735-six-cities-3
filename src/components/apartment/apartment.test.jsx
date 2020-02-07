import React from 'react';
import renderer from 'react-test-renderer';
import {Apartment} from "./apartment";

const TEST_OFFER_TITLE = `Perfect apartment`;

it(`Should render Apartment item correctly`, () => {
  const tree = renderer
    .create(<Apartment
      offer={TEST_OFFER_TITLE}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

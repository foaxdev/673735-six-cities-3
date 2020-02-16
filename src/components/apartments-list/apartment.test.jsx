import renderer from "react-test-renderer";
import React from "react";
import {ApartmentsList} from "./apartments-list";

export const TEST_OFFER = {
  type: `apartment`,
  price: 120,
  title: `Wood and stone place`,
  isPremium: true,
  isFavourite: false,
  rating: 4,
  photoSrc: `img/apartment-01.jpg`
};
const TEST_CARD_HOVER_HANDLER = () => {};

it(`Should render ApartmentsList item correctly`, () => {
  const tree = renderer
    .create(<ApartmentsList
      offer={TEST_OFFER}
      onCardHover={TEST_CARD_HOVER_HANDLER}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

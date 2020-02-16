import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Apartment} from "./apartment";

export const TEST_OFFER = {
  type: `apartment`,
  price: 120,
  title: `Wood and stone place`,
  isPremium: true,
  isFavourite: false,
  rating: 4,
  photoSrc: `img/apartment-01.jpg`
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should header button be clicked`, () => {
  const onCardHover = jest.fn();

  const main = shallow(
      <Apartment
        offer={TEST_OFFER}
        onCardHover={onCardHover}
      />
  );

  main.props().onMouseOver();

  expect(onCardHover.mock.calls.length).toBe(1);
});

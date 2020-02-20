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

it(`Card should be hovered`, () => {
  const onCardHover = jest.fn();

  const apartmentBlock = shallow(
      <Apartment
        index={0}
        offer={TEST_OFFER}
        onCardHover={onCardHover}
        onHeaderClick={() => {}}
      />
  );

  apartmentBlock.props().onMouseOver();
  expect(onCardHover.mock.calls.length).toBe(1);
});

it(`When click on apt preview its page should be rendered`, () => {
  const onHeaderClick = jest.fn();

  const apartmentBlock = shallow(
      <Apartment
        index={0}
        offer={TEST_OFFER}
        onCardHover={() => {}}
        onHeaderClick={onHeaderClick}
      />
  );

  const header = apartmentBlock.find(`.place-card__link`);

  header.props().onClick();
  expect(onHeaderClick.mock.calls.length).toBe(1);
});

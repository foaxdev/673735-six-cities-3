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
const TEST_MAIN_CLASS = `near-places`;
const TEST_HANDLER = () => {};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Card should be hovered`, () => {
  const onCardHover = jest.fn();

  const apartmentBlock = shallow(
      <Apartment
        onCardHover={onCardHover}
        offer={TEST_OFFER}
        showPremiumBadge={false}
        index={0}
        onHeaderClick={TEST_HANDLER}
        mainApartmentClass={TEST_MAIN_CLASS}/>
  );

  apartmentBlock.props().onMouseOver();
  expect(onCardHover.mock.calls.length).toBe(1);
});

it(`When click on apt preview its page should be rendered`, () => {
  const onHeaderClick = jest.fn();

  const apartmentBlock = shallow(
      <Apartment
        onCardHover={TEST_HANDLER}
        offer={TEST_OFFER}
        showPremiumBadge={false}
        index={0}
        onHeaderClick={onHeaderClick}
        mainApartmentClass={TEST_MAIN_CLASS}/>
  );

  const header = apartmentBlock.find(`.place-card__link`);

  header.props().onClick();
  expect(onHeaderClick.mock.calls.length).toBe(1);
});

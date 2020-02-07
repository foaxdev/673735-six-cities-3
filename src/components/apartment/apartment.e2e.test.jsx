import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Apartment} from "./apartment";

const TEST_OFFER = `Beautiful & luxurious apartment at great location`;

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should header button be clicked`, () => {
  const onHeaderButtonClick = jest.fn();

  const main = shallow(
      <Apartment
        offer={TEST_OFFER}
        onHeaderButtonClick={onHeaderButtonClick}
      />
  );

  const welcomeButton = main.find(`h2.place-card__name`);

  welcomeButton.props().onClick();

  expect(onHeaderButtonClick.mock.calls.length).toBe(1);
});

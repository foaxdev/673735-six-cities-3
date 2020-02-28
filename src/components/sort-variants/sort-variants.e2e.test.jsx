import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SortVariants} from "./sort-variants";

const TEST_HANDLER = () => {};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Open sort list after click`, () => {
  const onSortListClick = jest.fn();

  const sortToggle = shallow(
      <SortVariants
        isSortOpened={false}
        currentSortType={`Popular`}
        onSortListClick={onSortListClick}
        onSortTypeClick={TEST_HANDLER}/>
  );

  const sortLink = sortToggle.find(`.places__sorting-type`);

  sortLink.props().onClick();
  expect(onSortListClick.mock.calls.length).toBe(1);
});

it(`Highlight sort variant after click`, () => {
  const onSortTypeClick = jest.fn();

  const sortToggle = shallow(
      <SortVariants
        isSortOpened={true}
        currentSortType={`Top rated first`}
        onSortListClick={TEST_HANDLER}
        onSortTypeClick={onSortTypeClick}/>
  );

  const sortVariant = sortToggle.find(`.places__option`).at(1);

  sortVariant.props().onClick();
  expect(onSortTypeClick.mock.calls.length).toBe(1);
});

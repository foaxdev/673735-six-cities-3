import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import SortVariants from "./sort-variants";

const mockStore = configureStore([]);
const TEST_HANDLER = () => {};

it(`Should render closed Sort Variants correctly`, () => {
  const store = mockStore({
    isSortOpened: false,
    currentSortType: `Popular`,
    onSortListClick: TEST_HANDLER,
    onSortTypeClick: TEST_HANDLER
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <SortVariants />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should render opened Sort Variants correctly`, () => {
  const store = mockStore({
    isSortOpened: true,
    currentSortType: `Top rated first`,
    onSortListClick: TEST_HANDLER,
    onSortTypeClick: TEST_HANDLER
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <SortVariants />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

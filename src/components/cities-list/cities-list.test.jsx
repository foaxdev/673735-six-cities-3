import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from "./cities-list";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const TEST_HANDLER = () => {};
const TEST_CITIES = [`Japan`, `Korea`, `China`, `Singapore`];
const TEST_CURRENT_CITY = `Japan`;

it(`Should render Cities List correctly`, () => {
  const store = mockStore({
    currentCity: TEST_CURRENT_CITY,
    cities: TEST_CITIES,
    onCityClick: TEST_HANDLER
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <CitiesList />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

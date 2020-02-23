import React from 'react';
import renderer from 'react-test-renderer';
import {Review} from "./review";

const TEST_REVIEW = {
  id: 11,
  avatar: `img/avatar-max.jpg`,
  name: `Miki`,
  rating: 1,
  date: 1082368200000,
  text: `So so, could be better`
};

it(`Should render Review correctly`, () => {
  const tree = renderer
    .create(
        <Review
          rating={TEST_REVIEW.rating}
          avatar={TEST_REVIEW.avatar}
          date={TEST_REVIEW.date}
          text={TEST_REVIEW.text}
          name={TEST_REVIEW.name}
          id={TEST_REVIEW.id}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

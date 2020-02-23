import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewsList} from "./reviews-list";

const TEST_REVIEWS = [
  {
    id: 0,
    avatar: `img/avatar-max.jpg`,
    name: `Max`,
    rating: 5,
    date: 1082368261115,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
  },
  {
    id: 1,
    avatar: `img/avatar-max.jpg`,
    name: `Anna`,
    rating: 4,
    date: 1500368261000,
    text: `Good place, good food, good everything`
  },
  {
    id: 2,
    avatar: `img/avatar-max.jpg`,
    name: `Akira`,
    rating: 5,
    date: 1580068260000,
    text: `Excellent`
  },
  {
    id: 3,
    avatar: `img/avatar-max.jpg`,
    name: `Miki`,
    rating: 1,
    date: 1082368200000,
    text: `So so, could be better`
  },
  {
    id: 4,
    avatar: `img/avatar-max.jpg`,
    name: `Max`,
    rating: 5,
    date: 1082368261115,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
  },
  {
    id: 5,
    avatar: `img/avatar-max.jpg`,
    name: `Anna`,
    rating: 4,
    date: 1500368261000,
    text: `Good place, good food, good everything`
  },
  {
    id: 6,
    avatar: `img/avatar-max.jpg`,
    name: `Akira`,
    rating: 5,
    date: 1580068260000,
    text: `Excellent`
  },
  {
    id: 7,
    avatar: `img/avatar-max.jpg`,
    name: `Miki`,
    rating: 1,
    date: 1082368200000,
    text: `So so, could be better`
  },
  {
    id: 8,
    avatar: `img/avatar-max.jpg`,
    name: `Max`,
    rating: 5,
    date: 1082368261115,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
  },
  {
    id: 9,
    avatar: `img/avatar-max.jpg`,
    name: `Anna`,
    rating: 4,
    date: 1500368261000,
    text: `Good place, good food, good everything`
  },
  {
    id: 10,
    avatar: `img/avatar-max.jpg`,
    name: `Akira`,
    rating: 5,
    date: 1580068260000,
    text: `Excellent`
  },
  {
    id: 11,
    avatar: `img/avatar-max.jpg`,
    name: `Miki`,
    rating: 1,
    date: 1082368200000,
    text: `So so, could be better`
  }
];

it(`Should render Reviews List correctly`, () => {
  const tree = renderer
    .create(<ReviewsList reviews={TEST_REVIEWS}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

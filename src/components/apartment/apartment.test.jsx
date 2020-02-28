import React from 'react';
import renderer from 'react-test-renderer';
import {Apartment} from "./apartment";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

export const TEST_OFFER = {
  type: `apartment`,
  price: 120,
  title: `Wood and stone place`,
  isPremium: true,
  isFavourite: false,
  rating: 4,
  photoSrc: `img/apartment-01.jpg`,
  photos: [
    {
      src: `img/room.jpg`,
      alt: `Photo studio`
    },
    {
      src: `img/apartment-01.jpg`,
      alt: `Photo studio`
    },
    {
      src: `img/apartment-02.jpg`,
      alt: `Photo studio`
    },
    {
      src: `img/apartment-03.jpg`,
      alt: `Photo studio`
    },
    {
      src: `img/studio-01.jpg`,
      alt: `Photo studio`
    },
    {
      src: `img/apartment-01.jpg`,
      alt: `Photo studio`
    }
  ],
  description: [
    `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    `Some more text for test`
  ],
  bedrooms: 3,
  guests: 1,
  amenities: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`, `PlayStation 4`],
  host: {
    avatar: `img/avatar-angelina.jpg`,
    name: `Some`,
    isSuper: true
  },
  coordinates: [52.3909553943508, 4.85309666406198],
  reviews: [
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
  ]
};
const TEST_HANDLER = () => {};
const TEST_MAIN_CLASS_ON_MAIN_PAGE = `cities`;
const TEST_MAIN_CLASS_ON_DETAILED_PAGE = `near-places`;

it(`Should render Apartment item like on main page correctly`, () => {
  const store = mockStore({
    onCardHover: TEST_HANDLER,
    offer: TEST_OFFER,
    showPremiumBadge: true,
    index: 0,
    onHeaderClick: TEST_HANDLER,
    mainApartmentClass: TEST_MAIN_CLASS_ON_MAIN_PAGE
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Apartment
            onCardHover={TEST_HANDLER}
            offer={TEST_OFFER}
            showPremiumBadge={true}
            index={0}
            onHeaderClick={TEST_HANDLER}
            mainApartmentClass={TEST_MAIN_CLASS_ON_MAIN_PAGE}/>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should render Apartment item like on a detailed page correctly`, () => {
  const store = mockStore({
    onCardHover: TEST_HANDLER,
    offer: TEST_OFFER,
    showPremiumBadge: true,
    index: 0,
    onHeaderClick: TEST_HANDLER,
    mainApartmentClass: TEST_MAIN_CLASS_ON_DETAILED_PAGE
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Apartment
            onCardHover={TEST_HANDLER}
            offer={TEST_OFFER}
            showPremiumBadge={false}
            index={0}
            onHeaderClick={TEST_HANDLER}
            mainApartmentClass={TEST_MAIN_CLASS_ON_DETAILED_PAGE}/>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

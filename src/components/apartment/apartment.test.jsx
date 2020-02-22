import React from 'react';
import renderer from 'react-test-renderer';
import {Apartment} from "./apartment";

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
  coordinates: [52.3809553943508, 4.939309666406198]
};
const TEST_CARD_HOVER_HANDLER = () => {};
const TEST_HEADER_CLICK_HANDLER = () => {};

it(`Should render Apartment item correctly`, () => {
  const tree = renderer
    .create(<Apartment
      index={0}
      offer={TEST_OFFER}
      onCardHover={TEST_CARD_HOVER_HANDLER}
      onHeaderClick={TEST_HEADER_CLICK_HANDLER}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

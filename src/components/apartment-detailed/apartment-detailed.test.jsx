import React from 'react';
import renderer from 'react-test-renderer';
import {ApartmentDetailed} from "./apartment-detailed";

const TEST_OFFER = {
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
  }
};

it(`Should render Detailed Apartment item correctly`, () => {
  const tree = renderer
    .create(<ApartmentDetailed
      offer={TEST_OFFER}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

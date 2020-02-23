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

const TEST_OFFERS_NEARBY = [
  {
    type: `hotel`,
    price: 120,
    title: `Hotel, not hostel`,
    isPremium: true,
    isFavourite: false,
    rating: 4.5,
    photoSrc: `img/apartment-01.jpg`,
    coordinates: [52.3893939393000, 4.939309393409393],
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
      }
    ],
    description: [
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    bedrooms: 6,
    guests: 3,
    amenities: [`Wi-Fi`, `Washing machine`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`, `PlayStation 4`, `Pet foxes on the yard`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Tomoko`,
      isSuper: true
    },
    reviews: [
      {
        id: 15,
        avatar: `img/avatar-max.jpg`,
        name: `Max`,
        rating: 3,
        date: 1082368261115,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
      },
      {
        id: 16,
        avatar: `img/avatar-max.jpg`,
        name: `Anna`,
        rating: 4,
        date: 1500368261000,
        text: `Good place, good food, good everything`
      },
      {
        id: 17,
        avatar: `img/avatar-max.jpg`,
        name: `Akira`,
        rating: 5,
        date: 1580068260000,
        text: `Excellent`
      }
    ]
  },
  {
    type: `apartment`,
    price: 70,
    title: `Some good place`,
    isPremium: false,
    isFavourite: true,
    rating: 4.9,
    coordinates: [52.3893939393000, 4.939309393409393],
    photoSrc: `img/apartment-02.jpg`,
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
      }
    ],
    description: [
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    bedrooms: 6,
    guests: 3,
    amenities: [`Wi-Fi`, `Washing machine`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`, `PlayStation 4`, `Pet foxes on the yard`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Tomoko`,
      isSuper: true
    },
    reviews: [
      {
        id: 15,
        avatar: `img/avatar-max.jpg`,
        name: `Max`,
        rating: 3,
        date: 1082368261115,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
      },
      {
        id: 16,
        avatar: `img/avatar-max.jpg`,
        name: `Anna`,
        rating: 4,
        date: 1500368261000,
        text: `Good place, good food, good everything`
      },
      {
        id: 17,
        avatar: `img/avatar-max.jpg`,
        name: `Akira`,
        rating: 5,
        date: 1580068260000,
        text: `Excellent`
      }
    ]
  },
  {
    type: `house`,
    price: 150,
    title: `Cool house`,
    isPremium: true,
    isFavourite: false,
    rating: 4,
    coordinates: [52.3800939444400, 4.934409344449393],
    photoSrc: `img/apartment-03.jpg`,
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
      }
    ],
    description: [
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    bedrooms: 6,
    guests: 3,
    amenities: [`Wi-Fi`, `Washing machine`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`, `PlayStation 4`, `Pet foxes on the yard`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Tomoko`,
      isSuper: true
    },
    reviews: [
      {
        id: 15,
        avatar: `img/avatar-max.jpg`,
        name: `Max`,
        rating: 3,
        date: 1082368261115,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
      },
      {
        id: 16,
        avatar: `img/avatar-max.jpg`,
        name: `Anna`,
        rating: 4,
        date: 1500368261000,
        text: `Good place, good food, good everything`
      },
      {
        id: 17,
        avatar: `img/avatar-max.jpg`,
        name: `Akira`,
        rating: 5,
        date: 1580068260000,
        text: `Excellent`
      }
    ]
  }
];

const TEST_OFFER_CARD_HEADER_CLICK_HANDLER = () => {};
const TEST_OFFER_CARD_HOVER_HANDLER = () => {};

it(`Should render Detailed Apartment item correctly`, () => {
  const tree = renderer
    .create(<ApartmentDetailed
      offer={TEST_OFFER}
      offersNearby={TEST_OFFERS_NEARBY}
      onOfferCardHeaderClick={TEST_OFFER_CARD_HEADER_CLICK_HANDLER}
      onOfferCardHover={TEST_OFFER_CARD_HOVER_HANDLER}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

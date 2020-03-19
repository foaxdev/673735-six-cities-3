import renderer from "react-test-renderer";
import React from "react";
import ApartmentsList from "./apartments-list";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

export const TEST_OFFERS = [
  {
    id: 0,
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
  },
  {
    id: 1,
    type: `room`,
    price: 20,
    title: `Your perfect room`,
    isPremium: false,
    isFavourite: true,
    rating: 4.5,
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
      `Some more text for test`
    ],
    bedrooms: 1,
    guests: 4,
    amenities: [`Wi-Fi`, `Washing machine`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`, `PlayStation 4`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Akira`,
      isSuper: false
    },
    coordinates: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        id: 12,
        avatar: `img/avatar-max.jpg`,
        name: `Max`,
        rating: 4.8,
        date: 1082368261115,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
      },
      {
        id: 13,
        avatar: `img/avatar-max.jpg`,
        name: `Anna`,
        rating: 4,
        date: 1500368261000,
        text: `Good place, good food, good everything`
      }
    ]
  },
  {
    id: 2,
    type: `house`,
    price: 220,
    title: `The best house ever`,
    isPremium: false,
    isFavourite: false,
    rating: 5,
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
      `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      `Some more text for test`
    ],
    bedrooms: 1,
    guests: 1,
    amenities: [`Wi-Fi`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Miki`,
      isSuper: false
    },
    coordinates: [52.3909553943508, 4.929309666406198],
    reviews: [
      {
        id: 14,
        avatar: `img/avatar-max.jpg`,
        name: `Max`,
        rating: 4,
        date: 1082368261115,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
      }
    ]
  },
  {
    id: 3,
    type: `hotel`,
    price: 100,
    title: `Hotel, not hostel`,
    isPremium: true,
    isFavourite: false,
    rating: 4.8,
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
    coordinates: [52.3809553943508, 4.939309666406198],
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

it(`Should render ApartmentsList on the main page correctly`, () => {
  const store = mockStore({
    offersByCity: TEST_OFFERS,
    showPremiumBadge: true,
    mainApartmentClass: `cities`
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <ApartmentsList offersByCity={TEST_OFFERS}/>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should render ApartmentsList on the detailed page correctly`, () => {
  const store = mockStore({
    offersByCity: TEST_OFFERS,
    showPremiumBadge: false,
    mainApartmentClass: `near-places`
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <ApartmentsList />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

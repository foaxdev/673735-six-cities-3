import {ActionCreator, ActionType, reducer} from "./reducer";

const TEST_OFFERS = [
  {
    city: `Amsterdam`,
    cityCoordinates: [52.38333, 4.9],
    markerCoordinates: [52.3709553943508, 4.89309666406198],
    offers: [
      {
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
    ]
  },
  {
    city: `Paris`,
    cityCoordinates: [48.8566, 2.3522],
    markerCoordinates: [48.8566, 2.3522],
    offers: [
      {
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
    ]
  },
  {
    city: `Cologne`,
    cityCoordinates: [50.9375, 6.9603],
    markerCoordinates: [50.9375, 6.9603],
    offers: [
      {
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
    ]
  },
  {
    city: `Brussels`,
    cityCoordinates: [50.8503, 4.3517],
    markerCoordinates: [50.8503, 4.3517],
    offers: [
      {
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
    ]
  },
  {
    city: `Hamburg`,
    cityCoordinates: [53.5511, 9.9937],
    markerCoordinates: [53.5511, 9.9937],
    offers: [
      {
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
    ]
  },
  {
    city: `Dusseldorf`,
    cityCoordinates: [51.2277, 6.7735],
    markerCoordinates: [51.2277, 6.7735],
    offers: []
  }
];

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


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    currentPage: -1,
    currentCity: `Amsterdam`,
    offers: TEST_OFFERS,
    offersNearby: TEST_OFFERS_NEARBY
  });
});

it(`Reducer should change city by a given value`, () => {
  expect(reducer({
    currentPage: -1,
    currentCity: `Amsterdam`,
    offers: TEST_OFFERS,
    offersNearby: TEST_OFFERS_NEARBY
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Japan`,
  })).toEqual({
    currentPage: -1,
    currentCity: `Japan`,
    offers: TEST_OFFERS,
    offersNearby: TEST_OFFERS_NEARBY
  });

  expect(reducer({
    currentPage: -1,
    currentCity: `Amsterdam`,
    offers: TEST_OFFERS,
    offersNearby: TEST_OFFERS_NEARBY
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Amsterdam`,
  })).toEqual({
    currentPage: -1,
    currentCity: `Amsterdam`,
    offers: TEST_OFFERS,
    offersNearby: TEST_OFFERS_NEARBY
  });
});

it(`Reducer should change current page by a given value`, () => {
  expect(reducer({
    currentPage: -1,
    currentCity: `Amsterdam`,
    offers: TEST_OFFERS,
    offersNearby: TEST_OFFERS_NEARBY
  }, {
    type: ActionType.CHANGE_CURRENT_PAGE,
    payload: 1,
  })).toEqual({
    currentPage: 1,
    currentCity: `Amsterdam`,
    offers: TEST_OFFERS,
    offersNearby: TEST_OFFERS_NEARBY
  });

  expect(reducer({
    currentPage: -1,
    currentCity: `Amsterdam`,
    offers: TEST_OFFERS,
    offersNearby: TEST_OFFERS_NEARBY
  }, {
    type: ActionType.CHANGE_CURRENT_PAGE,
    payload: -1,
  })).toEqual({
    currentPage: -1,
    currentCity: `Amsterdam`,
    offers: TEST_OFFERS,
    offersNearby: TEST_OFFERS_NEARBY
  });
});

it(`Reducer should return default`, () => {
  expect(reducer({
    currentPage: -1,
    currentCity: `Amsterdam`,
    offers: TEST_OFFERS,
    offersNearby: TEST_OFFERS_NEARBY
  }, {
    type: ActionType.CHANGE_CITY,
    payload: null,
  })).toEqual({
    currentPage: -1,
    currentCity: `Amsterdam`,
    offers: TEST_OFFERS,
    offersNearby: TEST_OFFERS_NEARBY
  });

  expect(reducer({
    currentPage: -1,
    currentCity: `Amsterdam`,
    offers: TEST_OFFERS,
    offersNearby: TEST_OFFERS_NEARBY
  }, {
    type: ActionType.CHANGE_CURRENT_PAGE,
    payload: null,
  })).toEqual({
    currentPage: -1,
    currentCity: `Amsterdam`,
    offers: TEST_OFFERS,
    offersNearby: TEST_OFFERS_NEARBY
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Japan`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Japan`,
    });
  });

  it(`Action creator for change current page return correct action`, () => {
    expect(ActionCreator.changeCurrentPage(0))
      .toEqual({
        type: ActionType.CHANGE_CURRENT_PAGE,
        payload: 0,
      });
  });
});

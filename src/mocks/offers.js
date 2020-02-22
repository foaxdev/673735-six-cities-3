export const offers = [
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
    reviews: [
      {
        id: 0,
        avatar: `img/avatar-max.jpg`,
        name: `Max`,
        rating: 4.8,
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
        rating: 3.5,
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
    reviews: [
      {
        id: 0,
        avatar: `img/avatar-max.jpg`,
        name: `Max`,
        rating: 4.8,
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
    reviews: [
      {
        id: 0,
        avatar: `img/avatar-max.jpg`,
        name: `Max`,
        rating: 4.8,
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
    reviews: [
      {
        id: 0,
        avatar: `img/avatar-max.jpg`,
        name: `Max`,
        rating: 4.8,
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
      }
    ]
  }
];

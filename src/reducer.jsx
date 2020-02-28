import {offers, offersNearby} from "./mocks/offers";
import {extend} from "./utils/utils";

const SORT_TYPES = {
  POPULAR: `Popular`,
  PRICE_FROM_LOW: `Price: low to high`,
  PRICE_FROM_HIGH: `Price: high to low`,
  PRICE_TOP_FIRST: `Top rated first`
};

const getObjectDataByCity = (city) => {
  for (let i = 0; i < offers.length; i++) {
    if (offers[i].city === city) {
      return offers[i];
    }
  }

  return null;
};

const sortOffers = (city, sortType) => {
  const offersByCity = getObjectDataByCity(city).offers;

  switch (sortType) {
    case SORT_TYPES.POPULAR:
      return offersByCity;

    case SORT_TYPES.PRICE_FROM_LOW:
      return [...offersByCity].sort((a, b) => a.price - b.price);

    case SORT_TYPES.PRICE_FROM_HIGH:
      return [...offersByCity].sort((a, b) => b.price - a.price);

    case SORT_TYPES.PRICE_TOP_FIRST:
      return [...offersByCity].sort((a, b) => b.rating - a.rating);
  }
};

const initialState = {
  isSortOpened: false,
  currentSortType: `Popular`,
  currentPage: -1,
  currentCity: `Amsterdam`,
  currentCityCoordinates: getObjectDataByCity(`Amsterdam`).cityCoordinates,
  currentCityMarkerCoordinates: getObjectDataByCity(`Amsterdam`).markerCoordinates,
  cities: offers.map(offer => offer.city),
  mainApartmentClass: `cities`,
  showPremiumBadge: true,
  detailedOffer: {},
  detailedOfferReviews: [],
  offers,
  offersNearby,
  offersByCityQuantity: getObjectDataByCity(`Amsterdam`).offers.length,
  offersByCity: getObjectDataByCity(`Amsterdam`).offers,
  coordinatesOfOffersByCity: getObjectDataByCity(`Amsterdam`).offers.map((offer) => offer.coordinates)
};

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_CURRENT_PAGE: `CHANGE_CURRENT_PAGE`,
  TOGGLE_SORT: `TOGGLE_SORT`,
  CHANGE_SORT_TYPE: `CHOOSE_SORTING`
};

export const ActionCreator = {
  changeCurrentPage: (page) => ({
    type: ActionType.CHANGE_CURRENT_PAGE,
    payload: page
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  toggleSortList: () => ({
    type: ActionType.TOGGLE_SORT,
    payload: null
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload || state.currentCity,
        offersByCity: sortOffers(action.payload || state.currentCity, state.currentSortType),
        offersByCityQuantity: getObjectDataByCity(action.payload || state.currentCity).offers.length,
        coordinatesOfOffersByCity: getObjectDataByCity(action.payload || state.currentCity).offers.map((offer) => offer.coordinates),
        currentCityCoordinates: getObjectDataByCity(action.payload || state.currentCity).cityCoordinates,
        currentCityMarkerCoordinates: getObjectDataByCity(action.payload || state.currentCity).markerCoordinates
      });

    case ActionType.CHANGE_CURRENT_PAGE:
      return extend(state, {
        currentPage: action.payload !== null ? action.payload : state.currentPage,
        offersByCity: action.payload !== null && action.payload !== -1 ? state.offersNearby : state.offersByCity,
        mainApartmentClass: action.payload !== null && action.payload !== -1 ? `near-places` : `cities`,
        showPremiumBadge: action.payload !== null && action.payload === -1,
        coordinatesOfOffersByCity: offersNearby.map((a) => a.coordinates),
        detailedOffer: action.payload !== null && action.payload !== -1 ? getObjectDataByCity(state.currentCity).offers[action.payload] : {},
        currentCityCoordinates: action.payload !== null && action.payload !== -1 ? getObjectDataByCity(state.currentCity).offers[action.payload].coordinates : [],
        currentCityMarkerCoordinates: action.payload !== null && action.payload !== -1 ? getObjectDataByCity(state.currentCity).offers[action.payload].coordinates : [],
        detailedOfferReviews: action.payload !== null && action.payload !== -1 ? getObjectDataByCity(state.currentCity).offers[action.payload].reviews : []
      });

    case ActionType.TOGGLE_SORT:
      return extend(state, {
        isSortOpened: !state.isSortOpened
      });

    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        currentSortType: action.payload || state.currentSortType,
        isSortOpened: false,
        offersByCity: sortOffers(state.currentCity, action.payload || state.currentSortType)
      });
  }

  return state;
};

import {offers} from "./mocks/offers";

const initialState = {
  city: `Amsterdam`,
  listOfOffers: offers
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`,
};
export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_OFFERS_LIST:
      return extend(state, {
        listOfOffers: action.payload,
      });
  }

  return state;
};

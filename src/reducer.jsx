import {offers, offersNearby} from "./mocks/offers";
import {extend} from "./utils/utils";

const initialState = {
  currentPage: -1,
  currentCity: `Amsterdam`,
  offers,
  offersNearby
};

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_CURRENT_PAGE: `CHANGE_CURRENT_PAGE`
};

export const ActionCreator = {
  changeCurrentPage: (page) => ({
    type: ActionType.CHANGE_CURRENT_PAGE,
    payload: page
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload ? action.payload : state.currentCity,
      });

    case ActionType.CHANGE_CURRENT_PAGE:
      return extend(state, {
        currentPage: action.payload ? action.payload : state.currentPage
      });
  }

  return state;
};

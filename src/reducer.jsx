import {offers, offersNearby} from "./mocks/offers";
import {extend} from "./utils/utils";

const initialState = {
  isSortOpened: false,
  currentPage: -1,
  currentCity: `Amsterdam`,
  offers,
  offersNearby
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
      });

    case ActionType.CHANGE_CURRENT_PAGE:
      return extend(state, {
        currentPage: action.payload || state.currentPage
      });

    case ActionType.TOGGLE_SORT:
      return extend(state, {
        isSortOpened: !state.isSortOpened
      });
  }

  return state;
};

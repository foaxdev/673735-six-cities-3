import {offers, offersNearby} from "./mocks/offers";
import {extend} from "./utils/utils";
import React from "react";

const initialState = {
  currentPage: -1,
  currentCity: `Amsterdam`,
  offers: offers,
  offersNearby: offersNearby
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`,
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

const getObjectDataByCity = (offers, city) => {
  for (let i = 0; i < offers.length; i++) {
    if (offers[i].city === city) {
      return offers[i];
    }
  }

  return null;
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });

    case ActionType.CHANGE_CURRENT_PAGE:
      return extend(state, {
        currentPage: action.payload
      });

    case ActionType.GET_OFFERS_LIST:
      return extend(state, {
        offers: getObjectDataByCity(this.state.offers, state.currentCity).offers,
      });
  }

  return state;
};

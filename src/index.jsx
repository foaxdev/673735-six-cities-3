import ReactDOM from "react-dom";
import React from "react";
import {App} from "./components/app/app";
import {offers, offersNearby} from "./mocks/offers";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer";

const HEADER_HOVER_CARD_HANDLER = () => {};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
  <Provider store={store}>
    <App
      currentCity={offers[0].city}
      offers={offers}
      offersNearby={offersNearby}
      onCardHover={HEADER_HOVER_CARD_HANDLER}
      onOfferCardHover={HEADER_HOVER_CARD_HANDLER}
    />,
  </Provider>,
  document.querySelector(`#root`)
);

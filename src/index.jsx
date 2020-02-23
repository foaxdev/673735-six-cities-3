import ReactDOM from "react-dom";
import React from "react";
import {App} from "./components/app/app";
import {offers, offersNearby} from "./mocks/offers";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer";

const OFFERS_QUANTITY = 500;
const HEADER_HOVER_CARD_HANDLER = () => {};
const CITY_COORDINATES = [52.38333, 4.9];
const OFFER_COORDINATES = [52.3709553943508, 4.89309666406198];

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
  <Provider store={store}>
    <App
      quantity={OFFERS_QUANTITY}
      cityCoordinates={CITY_COORDINATES}
      offerCoordinates={OFFER_COORDINATES}
      offers={offers}
      offersNearby={offersNearby}
      onCardHover={HEADER_HOVER_CARD_HANDLER}
      onOfferCardHover={HEADER_HOVER_CARD_HANDLER}
    />,
  </Provider>,
  document.querySelector(`#root`)
);

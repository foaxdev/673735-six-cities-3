import ReactDOM from "react-dom";
import React from "react";
import {App} from "./components/app/app";
import {offers} from "./mocks/offers";

const OFFERS_QUANTITY = 500;
const HEADER_HOVER_CARD_HANDLER = () => {};
const CITY = [52.38333, 4.9];
const OFFER_COORDINATES = [52.3709553943508, 4.89309666406198];

ReactDOM.render(
    <App
      quantity={OFFERS_QUANTITY}
      city={CITY}
      offerCoordinates={OFFER_COORDINATES}
      offers={offers}
      onCardHover={HEADER_HOVER_CARD_HANDLER}/>,
    document.getElementById(`root`)
);

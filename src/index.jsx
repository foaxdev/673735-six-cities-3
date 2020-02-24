import ReactDOM from "react-dom";
import React from "react";
import {App} from "./components/app/app";
import {offers} from "./mocks/offers";

const HEADER_HOVER_CARD_HANDLER = () => {};
const CITY_COORDINATES = [52.38333, 4.9];
const OFFER_COORDINATES = [52.3709553943508, 4.89309666406198];

ReactDOM.render(
    <App
      cityCoordinates={CITY_COORDINATES}
      offerCoordinates={OFFER_COORDINATES}
      offers={offers}
      onCardHover={HEADER_HOVER_CARD_HANDLER}/>,
    document.getElementById(`root`)
);

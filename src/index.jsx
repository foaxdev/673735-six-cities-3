import ReactDOM from "react-dom";
import React from "react";
import {App} from "./components/app/app";
import {offers} from "./mocks/offers";

const OFFERS_QUANTITY = 500;
const HEADER_HOVER_CARD_HANDLER = () => {};

ReactDOM.render(
    <App
      quantity={OFFERS_QUANTITY}
      offers={offers}
      onCardHover={HEADER_HOVER_CARD_HANDLER}/>,
    document.getElementById(`root`)
);

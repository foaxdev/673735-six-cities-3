import ReactDOM from "react-dom";
import React from "react";
import {App} from "./components/app/app";

const OFFERS_QUANTITY = 500;
const OFFERS = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Modern apartment`, `Something cool`];
const HEADER_BUTTON_CLICK_HANDLER = () => {};

ReactDOM.render(
    <App quantity={OFFERS_QUANTITY} offers={OFFERS} onHeaderButtonClick={HEADER_BUTTON_CLICK_HANDLER}/>,
    document.getElementById(`root`)
);

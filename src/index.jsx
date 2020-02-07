import ReactDOM from "react-dom";
import React from "react";
import {App} from "./components/app/app";

const OFFERS_QUANTITY = 500;
const OFFERS = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Modern apartment`, `Something cool`];

ReactDOM.render(
    <App quantity={OFFERS_QUANTITY} offers={OFFERS}/>,
    document.getElementById(`root`)
);

import ReactDOM from "react-dom";
import {App} from "./components/app";
import React from "react";

const OFFERS_QUANTITY = 500;

ReactDOM.render(
    <App quantity={OFFERS_QUANTITY}/>,
    document.getElementById(`root`)
);

import React from "react";
import {Main} from "./main";

export const App = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <Main quantity={props.quantity}/>
  );
};

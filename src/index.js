import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import UseReducer from "./UseReducer";
import UseEffect from "./UseEffect";
import UseContext from "./UseContext";
import UseRef from "./UseRef";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <UseRef />
  </StrictMode>,
  rootElement
);

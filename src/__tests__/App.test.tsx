import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "../Components/App";

it("renders without crashing", () => {
  ReactDOM.render(<AppContainer />, document.createElement(
    "div"
  ) as HTMLElement);
});

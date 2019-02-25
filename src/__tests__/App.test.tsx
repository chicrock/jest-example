import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AppContainer from "../Components/App";

configure({ adapter: new Adapter() });

describe("<AppContainer/>", () => {
  it("renders without crashing", () => {
    ReactDOM.render(<AppContainer />, document.createElement(
      "div"
    ) as HTMLElement);
  });

  it("calls componentDidMount", () => {
    sinon.spy(AppContainer.prototype, "componentDidMount");
    const button = mount(<AppContainer />);
    expect(AppContainer.prototype.componentDidMount).toHaveProperty(
      "callCount",
      1
    );
    // AppContainer.prototype.componentDidMount.restore();
  });
});

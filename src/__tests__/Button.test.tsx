import React from "react";
import { expect } from "chai";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import Button from "../Components/Button";

configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders a <Button /> components", () => {
    const button = shallow(<Button value="Test" />);
    expect(button.length).to.equal(1);
  });

  it("renders with className props", () => {
    const button = shallow(<Button value="Test" className={"asdf"} />);
    expect(button.find(".asdf").length).to.equal(1);
  });

  it("simulaasdfaskldfoi", () => {
    const onClick = sinon.spy();
    const button = shallow(<Button value="Test" onClick={onClick} />);
    button.simulate("click");
    expect(onClick).to.have.property("callCount", 1);
  });
});

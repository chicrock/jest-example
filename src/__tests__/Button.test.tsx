import React from "react";
import { expect as chaiExpect } from "chai";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import Button from "../Components/Button";

configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders a <Button /> components", () => {
    const button = shallow(<Button value="Test" />);
    expect(button.length).toEqual(1);
  });

  it("renders with className props", () => {
    const button = shallow(<Button value="Test" className={"asdf"} />);
    expect(button.find(".asdf").length).toEqual(1);
  });

  it("renders to Button click Event", () => {
    const onClick = sinon.spy();
    const button = shallow(<Button value="Test" onClick={onClick} />);
    button.simulate("click");
    chaiExpect(onClick).to.have.property("callCount", 1);
  });

  it("renders the output", () => {
    const button = shallow(<Button value="Test" />);
    const expectedOutput = '<input type="submit" value="Test"';

    const realOutput = button.html();
    expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });
});

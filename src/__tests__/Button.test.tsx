import React from "react";
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

  it("renders with props", () => {
    const button = shallow(<Button value="Test" className={"asdf"} />);
    expect(button.find(".asdf").length).toEqual(1);
    expect(button.props().className).toEqual("asdf");
    expect(button.props().value).toEqual("Test");
  });

  it("renders to Button click Event", () => {
    const onClick = sinon.spy();
    const button = shallow(<Button value="Test" onClick={onClick} />);
    button.simulate("click");
    expect(onClick).toHaveProperty("callCount", 1);
  });

  it("renders the output", () => {
    const button = shallow(<Button value="Test" />);
    const expectedOutput = '<input type="submit" value="Test"';

    const realOutput = button.html();
    expect(realOutput).toContain(expectedOutput);
    // expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });

  it("renders the value", () => {
    const button = shallow(<Button value="Test" />);

    expect(button.html()).toContain("Test");
  });
});

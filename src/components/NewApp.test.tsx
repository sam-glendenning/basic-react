import React from "react";
import renderer from "react-test-renderer";
import { shallow, ShallowWrapper } from "enzyme";
import NewApp from "./NewApp";
import { describe, it } from "@jest/globals";

describe("NewApp", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<NewApp />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("renders correct text in a header", () => {
		const wrapper : ShallowWrapper = shallow(<NewApp />);
		expect(wrapper.find("h1").text()).toBe("Here's another heading!");
	});

	it("renders the first paragraph", () => {
		const wrapper : ShallowWrapper = shallow(<NewApp />);
		expect(wrapper.find("p").text()).toBe("Here is a final paragraph.");
	});

	it("should alert a secret message on header click", () => {
		jest.spyOn(window, "alert").mockImplementation(() => {return true;});
		const wrapper : ShallowWrapper = shallow(<NewApp />);
		const header = wrapper.find("h1");
		header.simulate("click");
		expect(window.alert).toBeCalledTimes(1);
	});
});

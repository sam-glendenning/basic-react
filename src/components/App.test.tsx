import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App, { label } from "./App";
import { describe, it } from "@jest/globals";

describe("App", () => {
	it("renders correct text in a header", () => {
		const wrapper : ShallowWrapper = shallow(<App />);
		expect(wrapper.find("h1").text()).toBe("Hello, Sam!");
	});

	it("renders the first paragraph", () => {
		const wrapper : ShallowWrapper = shallow(<App />);
		expect(wrapper.find("p").text()).toBe("Welcome to my React app.");
	});

	it("generates a label", () => {
		const name  = "Dave";
		const l : string = label(name);
		expect(l).toBe("Hello, " + name + "!");
	});
});

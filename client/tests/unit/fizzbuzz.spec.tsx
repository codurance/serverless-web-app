import React from "react";
import { shallow } from "enzyme";
import FizzBuzz from "../../components/fizzbuzz";

describe("FizzBuzz", () => {
    it("should initially have no output", () => {
        const wrapper = shallow(<FizzBuzz />);
        const outputArea = wrapper.find("[data-test='fizzBuzzOutput']").at(0);
        expect(outputArea.text()).toEqual("");
    });
})
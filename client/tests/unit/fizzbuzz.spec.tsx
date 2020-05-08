import React from "react";
import { shallow } from "enzyme";
import FizzBuzz from "../../components/fizzbuzz";

describe("FizzBuzz", () => {
    let wrapper;
    let inputArea;

    beforeEach(() => {
        //Careful with this. If you do a simulate then a rerender will take place. You'll need to re-find any components you need.
        wrapper = shallow(<FizzBuzz />);
        inputArea = wrapper.find("[data-test='fizzBuzzInput']").at(0);
    })

    it("should initially have no output", () => {
        const outputArea = wrapper.find("[data-test='fizzBuzzOutput']").at(0);
        expect(outputArea.text()).toEqual("");
    });

    it("should output 1 when 1 is entered", () => {
        inputArea.simulate("change", { target: {name: "value", value: "1"}});

        const calculateButton = wrapper.find("[data-test='fizzBuzzCalculateButton']").at(0);
        calculateButton.simulate("click");

        const outputArea = wrapper.find("[data-test='fizzBuzzOutput']").at(0);
        expect(outputArea.text()).toEqual("1");
    })

    it.each(["3", "6", "9"])("should output Fizz when a multiple of three (%d) is entered", (inputValue: string) => {
        inputArea.simulate("change", { target: {name: "value", value: inputValue}});

        const calculateButton = wrapper.find("[data-test='fizzBuzzCalculateButton']").at(0);
        calculateButton.simulate("click");

        const outputArea = wrapper.find("[data-test='fizzBuzzOutput']").at(0);
        expect(outputArea.text()).toEqual("Fizz");
    })

    it.each(["5", "10", "20"])("should output Buzz when a multiple of five (%d) is entered", (inputValue: string) => {
        inputArea.simulate("change", { target: {name: "value", value: inputValue}});

        const calculateButton = wrapper.find("[data-test='fizzBuzzCalculateButton']").at(0);
        calculateButton.simulate("click");

        const outputArea = wrapper.find("[data-test='fizzBuzzOutput']").at(0);
        expect(outputArea.text()).toEqual("Buzz");
    })

    it.each(["15", "45", "60"])("should output Fizz Buzz when a multiple of five and three (%d) is entered", (inputValue: string) => {
        inputArea.simulate("change", { target: {name: "value", value: inputValue}});

        const calculateButton = wrapper.find("[data-test='fizzBuzzCalculateButton']").at(0);
        calculateButton.simulate("click");

        const outputArea = wrapper.find("[data-test='fizzBuzzOutput']").at(0);
        expect(outputArea.text()).toEqual("Fizz Buzz");
    })
})
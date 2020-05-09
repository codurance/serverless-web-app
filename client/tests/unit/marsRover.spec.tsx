import React from "react";
import { shallow } from "enzyme";
import MarsRover from "../../components/marsRover";

describe("Mars Rover", () => {
    it("should initialise the rover at 0,0,N", () => {
        const wrapper = shallow(<MarsRover />);
        const grid_0_0 = wrapper.find(".grid-location").at(0);
        expect(grid_0_0.contains(<img src="/public/img/rover_north.jpg" />)).toBe(true);
    });

    it("should rotate the rover right to face east", () => {
        const wrapper = shallow(<MarsRover />);

        const commandInput = wrapper.find("[data-test='commandInput']").at(0);
        commandInput.simulate("change", {target: {name: "value", value: "R"}});

        const executeButton = wrapper.find("[data-test='executeButton']").at(0);
        executeButton.simulate("click");

        const grid_0_0 = wrapper.find(".grid-location").at(0);
        expect(grid_0_0.contains(<img src="/public/img/rover_east.jpg" />)).toBe(true);
    })
})
import React from "react";
import { shallow } from "enzyme";
import MarsRover from "../../components/marsRover";

describe("Mars Rover", () => {
    it("should initialise the rover at 0,0,N", () => {
        const wrapper = shallow(<MarsRover />);
        const grid_0_0 = wrapper.find(".grid-location").at(0);
        expect(grid_0_0.contains(<img src="/public/img/rover_north.jpg" />)).toBe(true);
    });

    describe("when facing north at 0,0", () => {
        it("should rotate the rover right to face east", () => {
            const wrapper = shallow(<MarsRover />);

            const commandInput = wrapper.find("[data-test='commandInput']").at(0);
            commandInput.simulate("change", {target: {name: "value", value: "R"}});

            const executeButton = wrapper.find("[data-test='executeButton']").at(0);
            executeButton.simulate("click");

            const grid_0_0 = wrapper.find(".grid-location").at(0);
            expect(grid_0_0.contains(<img src="/public/img/rover_east.jpg" />)).toBe(true);
        });

        it("should rotate the rover right twice to face south", () => {
            const wrapper = shallow(<MarsRover />);

            const commandInput = wrapper.find("[data-test='commandInput']").at(0);
            commandInput.simulate("change", {target: {name: "value", value: "R,R"}});

            const executeButton = wrapper.find("[data-test='executeButton']").at(0);
            executeButton.simulate("click");

            const grid_0_0 = wrapper.find(".grid-location").at(0);
            expect(grid_0_0.contains(<img src="/public/img/rover_south.jpg" />)).toBe(true);
        });

        it("should rotate the rover right three times to face west", () => {
            const wrapper = shallow(<MarsRover />);

            const commandInput = wrapper.find("[data-test='commandInput']").at(0);
            commandInput.simulate("change", {target: {name: "value", value: "R,R,R"}});

            const executeButton = wrapper.find("[data-test='executeButton']").at(0);
            executeButton.simulate("click");

            const grid_0_0 = wrapper.find(".grid-location").at(0);
            expect(grid_0_0.contains(<img src="/public/img/rover_west.jpg" />)).toBe(true);
        });

        it("should rotate the rover right four times to face north", () => {
            const wrapper = shallow(<MarsRover />);

            const commandInput = wrapper.find("[data-test='commandInput']").at(0);
            commandInput.simulate("change", {target: {name: "value", value: "R,R,R,R"}});

            const executeButton = wrapper.find("[data-test='executeButton']").at(0);
            executeButton.simulate("click");

            const grid_0_0 = wrapper.find(".grid-location").at(0);
            expect(grid_0_0.contains(<img src="/public/img/rover_north.jpg" />)).toBe(true);
        });

        it("should rotate the rover left to face west", () => {
            const wrapper = shallow(<MarsRover />);

            const commandInput = wrapper.find("[data-test='commandInput']").at(0);
            commandInput.simulate("change", {target: {name: "value", value: "L"}});

            const executeButton = wrapper.find("[data-test='executeButton']").at(0);
            executeButton.simulate("click");

            const grid_0_0 = wrapper.find(".grid-location").at(0);
            expect(grid_0_0.contains(<img src="/public/img/rover_west.jpg" />)).toBe(true);
        });

        it("should rotate the rover left twice to face south", () => {
            const wrapper = shallow(<MarsRover />);

            const commandInput = wrapper.find("[data-test='commandInput']").at(0);
            commandInput.simulate("change", {target: {name: "value", value: "L,L"}});

            const executeButton = wrapper.find("[data-test='executeButton']").at(0);
            executeButton.simulate("click");

            const grid_0_0 = wrapper.find(".grid-location").at(0);
            expect(grid_0_0.contains(<img src="/public/img/rover_south.jpg" />)).toBe(true);
        });

        it("should rotate the rover left three times to face east", () => {
            const wrapper = shallow(<MarsRover />);

            const commandInput = wrapper.find("[data-test='commandInput']").at(0);
            commandInput.simulate("change", {target: {name: "value", value: "L,L,L"}});

            const executeButton = wrapper.find("[data-test='executeButton']").at(0);
            executeButton.simulate("click");

            const grid_0_0 = wrapper.find(".grid-location").at(0);
            expect(grid_0_0.contains(<img src="/public/img/rover_east.jpg" />)).toBe(true);
        });

        it("should rotate the rover left four times to face north", () => {
            const wrapper = shallow(<MarsRover />);

            const commandInput = wrapper.find("[data-test='commandInput']").at(0);
            commandInput.simulate("change", {target: {name: "value", value: "L,L,L,L"}});

            const executeButton = wrapper.find("[data-test='executeButton']").at(0);
            executeButton.simulate("click");

            const grid_0_0 = wrapper.find(".grid-location").at(0);
            expect(grid_0_0.contains(<img src="/public/img/rover_north.jpg" />)).toBe(true);
        });
    });
});
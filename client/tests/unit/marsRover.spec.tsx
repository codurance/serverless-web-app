import React from "react";
import { shallow } from "enzyme";
import MarsRover from "../../components/marsRover";

describe("Mars Rover", () => {
    it("should initialise the rover at 0,0,N", () => {
        const wrapper = shallow(<MarsRover />);
        const grid_0_0 = wrapper.find(".grid-location_0_0");
        expect(grid_0_0.contains(<img src="/public/img/rover_north.jpg" />)).toBe(true);
    });

    describe("when facing north at 0,0", () => {
        describe("when rotating right", () => {
            let wrapper;
            let commandInput;
            
            beforeEach(() => {
                wrapper = shallow(<MarsRover />);
                commandInput = wrapper.find("[data-test='commandInput']").at(0);
            });

            it("should rotate the rover right to face east", () => {
                commandInput.simulate("change", {target: {name: "value", value: "R"}});

                const executeButton = wrapper.find("[data-test='executeButton']").at(0);
                executeButton.simulate("click");

                const grid_0_0 = wrapper.find(".grid-location_0_0");
                expect(grid_0_0.contains(<img src="/public/img/rover_east.jpg" />)).toBe(true);
            });

            it("should rotate the rover right twice to face south", () => {
                commandInput.simulate("change", {target: {name: "value", value: "R,R"}});

                const executeButton = wrapper.find("[data-test='executeButton']").at(0);
                executeButton.simulate("click");

                const grid_0_0 = wrapper.find(".grid-location_0_0");
                expect(grid_0_0.contains(<img src="/public/img/rover_south.jpg" />)).toBe(true);
            });

            it("should rotate the rover right three times to face west", () => {
                commandInput.simulate("change", {target: {name: "value", value: "R,R,R"}});

                const executeButton = wrapper.find("[data-test='executeButton']").at(0);
                executeButton.simulate("click");

                const grid_0_0 = wrapper.find(".grid-location_0_0");
                expect(grid_0_0.contains(<img src="/public/img/rover_west.jpg" />)).toBe(true);
            });

            it("should rotate the rover right four times to face north", () => {
                commandInput.simulate("change", {target: {name: "value", value: "R,R,R,R"}});

                const executeButton = wrapper.find("[data-test='executeButton']").at(0);
                executeButton.simulate("click");

                const grid_0_0 = wrapper.find(".grid-location_0_0");
                expect(grid_0_0.contains(<img src="/public/img/rover_north.jpg" />)).toBe(true);
            });
        });

        describe("when rotating left", () => {
            let wrapper;
            let commandInput;
            
            beforeEach(() => {
                wrapper = shallow(<MarsRover />);
                commandInput = wrapper.find("[data-test='commandInput']").at(0);
            });

            it("should rotate the rover left to face west", () => {
                commandInput.simulate("change", {target: {name: "value", value: "L"}});

                const executeButton = wrapper.find("[data-test='executeButton']").at(0);
                executeButton.simulate("click");

                const grid_0_0 = wrapper.find(".grid-location_0_0");
                expect(grid_0_0.contains(<img src="/public/img/rover_west.jpg" />)).toBe(true);
            });

            it("should rotate the rover left twice to face south", () => {
                commandInput.simulate("change", {target: {name: "value", value: "L,L"}});

                const executeButton = wrapper.find("[data-test='executeButton']").at(0);
                executeButton.simulate("click");

                const grid_0_0 = wrapper.find(".grid-location_0_0");
                expect(grid_0_0.contains(<img src="/public/img/rover_south.jpg" />)).toBe(true);
            });

            it("should rotate the rover left three times to face east", () => {
                commandInput.simulate("change", {target: {name: "value", value: "L,L,L"}});

                const executeButton = wrapper.find("[data-test='executeButton']").at(0);
                executeButton.simulate("click");

                const grid_0_0 = wrapper.find(".grid-location_0_0");
                expect(grid_0_0.contains(<img src="/public/img/rover_east.jpg" />)).toBe(true);
            });

            it("should rotate the rover left four times to face north", () => {
                commandInput.simulate("change", {target: {name: "value", value: "L,L,L,L"}});

                const executeButton = wrapper.find("[data-test='executeButton']").at(0);
                executeButton.simulate("click");

                const grid_0_0 = wrapper.find(".grid-location_0_0");
                expect(grid_0_0.contains(<img src="/public/img/rover_north.jpg" />)).toBe(true);
            });
        });

        describe("whem moving forwards", () => {
            let wrapper;
            let commandInput;
            
            beforeEach(() => {
                wrapper = shallow(<MarsRover />);
                commandInput = wrapper.find("[data-test='commandInput']").at(0);
            });

            it("should move the rover forward one grid location", () => {
                commandInput.simulate("change", {target: {name: "value", value: "M"}});

                const executeButton = wrapper.find("[data-test='executeButton']").at(0);
                executeButton.simulate("click");

                const grid_0_1 = wrapper.find(".grid-location_0_1");
                expect(grid_0_1.contains(<img src="/public/img/rover_north.jpg" />)).toBe(true);
            });

            it("should move the rover forward ten times and teleport back to 0,0", () => {
                commandInput.simulate("change", {target: {name: "value", value: "M,M,M,M,M,M,M,M,M,M"}});

                const executeButton = wrapper.find("[data-test='executeButton']").at(0);
                executeButton.simulate("click");

                const grid_0_1 = wrapper.find(".grid-location_0_0");
                expect(grid_0_1.contains(<img src="/public/img/rover_north.jpg" />)).toBe(true);
            });

            it("should rotate right and move forward east one grid location", () => {
                commandInput.simulate("change", {target: {name: "value", value: "R,M"}});

                const executeButton = wrapper.find("[data-test='executeButton']").at(0);
                executeButton.simulate("click");

                const grid_0_1 = wrapper.find(".grid-location_1_0");
                expect(grid_0_1.contains(<img src="/public/img/rover_east.jpg" />)).toBe(true);
            })

            it("should move east 10 times and teleport back to 0,0", () => {
                commandInput.simulate("change", {target: {name: "value", value: "R,M,M,M,M,M,M,M,M,M,M"}});

                const executeButton = wrapper.find("[data-test='executeButton']").at(0);
                executeButton.simulate("click");

                const grid_0_1 = wrapper.find(".grid-location_0_0");
                expect(grid_0_1.contains(<img src="/public/img/rover_east.jpg" />)).toBe(true);
            })

            it("should rotate right, move west", () => {
                commandInput.simulate("change", {target: {name: "value", value: "R,M,L,L,M"}});

                const executeButton = wrapper.find("[data-test='executeButton']").at(0);
                executeButton.simulate("click");

                const grid_0_1 = wrapper.find(".grid-location_0_0");
                expect(grid_0_1.contains(<img src="/public/img/rover_west.jpg" />)).toBe(true);
            });
        });
    });
});
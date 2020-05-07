import Home from "../../pages/index";
import { shallow } from "enzyme";
import React from "react";

describe("Home page", () => {
    it("should have a nav link to the about page", () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper.contains(<div>About</div>)).toEqual(true);
    });
})
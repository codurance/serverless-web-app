import { mount } from "enzyme";
import React from "react";
import Incrementor from "../../components/incrementor";

describe("Incrementor", () => {
    it("should start with 0", () => {
        const wrapper = mount(<Incrementor />);
        const label = wrapper.find('.numberLabel').first();
        expect(label.text()).toEqual("0");
    });
})
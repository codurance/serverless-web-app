import { mount } from "enzyme";
import React from "react";
import Incrementor from "../../components/incrementor";

describe("Incrementor", () => {
    const wrapper = mount(<Incrementor />);
    const label = wrapper.find('.numberLabel').at(0);

    it("should start with 0", () => {
        expect(label.text()).toEqual("0");
    });

    describe('when I click increment button', () => {
        const incrementButton = wrapper.find('[data-test="incrementButton"]').first();

        it('should increment the label by 1', () => {
            incrementButton.simulate("click");

            expect(label.text()).toEqual("1");
        });
    });
})

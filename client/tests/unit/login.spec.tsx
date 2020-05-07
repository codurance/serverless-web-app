import React from "react";
import {mount} from "enzyme";
import LoginForm from "../../components/loginForm";

describe("Login form component", () => {
  const wrapper = mount(<LoginForm />);
  describe("when no field were filled", () => {
    it("should display an error: Please input your credentials", () => {
      const errorLabel = wrapper.find("[data-test='errorLabel']").at(0);
      expect(errorLabel.text()).toEqual("Please input your credentials");
    });
  });
});

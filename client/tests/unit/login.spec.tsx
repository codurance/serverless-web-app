import React from "react";
import {mount} from "enzyme";
import LoginForm, { Credentials } from "../../components/loginForm";


describe("Login form component", () => {
  const wrapper = mount(<LoginForm />);
  const errorLabel = wrapper.find("[data-test='errorLabel']").at(0);
  const submitButton = wrapper.find("[data-test='submitButton']").at(0);

  describe("when no field were filled", () => {
    it("should not display an error initially", () => {

      expect(errorLabel.text()).toEqual("");
    });

    const noValues: Credentials = {
      password: "",
      username: ""
    };

    it.each([
      ["Please input your credentials", noValues],
      ["Please input your password", {...noValues, username: "Jim"}]
    ])("should display an error: %s", (error, credentials: Credentials) => {
      const usernameField = wrapper.find("[data-test='usernameInput']").at(0);
      usernameField.simulate("change", {target: {name: "value", value: credentials.username}});

      submitButton.simulate('click');

      expect(errorLabel.text()).toEqual(error);
    });
  });
});

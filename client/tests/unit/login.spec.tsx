import React from "react";
import {mount} from "enzyme";
import LoginForm from "../../components/loginForm";

interface Credentials {
  username?: string;
  password?: string;
}

describe("Login form component", () => {
  const wrapper = mount(<LoginForm />);
  const errorLabel = wrapper.find("[data-test='errorLabel']").at(0);
  const submitButton = wrapper.find("[data-test='submitButton']").at(0);

  describe("when no field were filled", () => {
    it("should not display an error initially", () => {

      expect(errorLabel.text()).toEqual("");
    });

    it.each([
      [{}, "Please input your credentials"],
      [{username: "Jim"}, "Please input your password"]
    ])("should display an error: Please input your credentials", (credentials: Credentials, error) => {
      submitButton.simulate('click');

      if (credentials.username) {
        const usernameField = wrapper.find("[data-test='usernameInput']").at(0);
        usernameField.simulate("change", {target: {name: "value", value: credentials.username}});
      }

      expect(errorLabel.text()).toEqual(error);
    });
  });
});

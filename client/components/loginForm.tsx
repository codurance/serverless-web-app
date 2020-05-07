import React, {ChangeEvent, useState} from "react";

export interface Credentials {
  username: string;
  password: string;
}

export default function LoginForm() {
  const initialCredentials: Credentials = {
    password: "",
    username: ""
  };

  const [errorText, setErrorText] = useState("");
  const [credentials, setCredentials] = useState(initialCredentials);

  const loginUser = (e) => {
    if (!credentials.username) {
      setErrorText("Please input your credentials");
      e.preventDefault();
      return;
    }

    if(!credentials.password) {
      setErrorText("Please input your password");
      e.preventDefault();
      return;
    }
  }

  const updateUsername = (event: ChangeEvent<HTMLInputElement>) => {
    const username = event.target.value;
    setCredentials({
      ...credentials,
      username
    });
  }

  // function updatePassword(event: ChangeEvent<HTMLInputElement>) {
  //   const password = event.target.value;
  //   setPassword(password);
  // }
  return (<>
    <div data-test="errorLabel">{errorText}</div>
    <input data-test="usernameInput" type="text" value={credentials.username} onChange={updateUsername} />
    <button data-test="submitButton" onClick={loginUser}>Login</button>
  </>);
};

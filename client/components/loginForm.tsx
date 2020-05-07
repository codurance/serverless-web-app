import React, {useState, ChangeEvent} from "react";

export interface Credentials {
  username?: string;
  password?: string;
}

export default function LoginForm() {
  const [errorText, setErrorText] = useState("");
  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const loginUser = (e) => {
    console.log(username);
    // const usernameIsDefined = username;
    const passwordIsDefined = "";
    // const credentialsDefined = usernameIsDefined && passwordIsDefined;

    // if (!credentialsDefined) {
    //   setErrorText("Please input your credentials");
    //   e.preventDefault();
    //   return;
    // }

    if(!passwordIsDefined) {
      setErrorText("Please input your password");
      e.preventDefault();
      return;
    }
  }

  const updateUsername = (event: ChangeEvent<HTMLInputElement>) => {
    const inputUsername = event.target.value;
    console.log(inputUsername);
    setUsername(inputUsername);
    console.log(username);
  }

  // function updatePassword(event: ChangeEvent<HTMLInputElement>) {
  //   const password = event.target.value;
  //   setPassword(password);
  // }
  return (<>
    <div data-test="errorLabel">{errorText}</div>
    <input data-test="usernameInput" type="text" value={username} onChange={updateUsername} />
    <button data-test="submitButton" onClick={loginUser}>Login</button>
  </>);
};

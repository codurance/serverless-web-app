import React, {useState} from "react";


export default function LoginForm() {
  const [errorText, setErrorText] = useState("")

  function loginUser(e) {
    const credentialsAreEmpty = true;

    if (credentialsAreEmpty) {
      setErrorText("Please input your credentials");
      e.preventDefault();
    }
  }

  return (<>
    <div data-test="errorLabel">{errorText}</div>
    <button data-test="submitButton" onClick={loginUser}>Login</button>
  </>);
};

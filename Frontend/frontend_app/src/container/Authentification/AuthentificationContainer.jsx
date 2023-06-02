import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


import AuthentificationComponent from "../../component/Authentification/AuthentificationComponent";

const AuthentificationContainer = () => {
  const initLoginFormValues = {
    username: "",
    password: "",
  };
  const [loginFormValues, setLoginFormValue] = useState(initLoginFormValues);

  const handleFormValues = (input, field) => {
    var copy = {...loginFormValues};
    copy[field] = input;
    setLoginFormValue(copy)
  };

  const dispatch = useDispatch();

  const submitLogin = (event) => {
    event.preventDefault();

    dispatch({type: "SUBMIT_LOGIN", loginFormValues})
  };

  return (
    <AuthentificationComponent
      submitLogin={submitLogin}
      handleFormValues={handleFormValues}
    />
  )
}

export default AuthentificationContainer;
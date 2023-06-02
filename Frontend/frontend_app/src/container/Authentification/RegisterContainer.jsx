import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import AuthentificationComponent from "../../component/Authentification/AuthentificationComponent";

const RegisterContainer = () => {
  const initRegisterFormValue = {
    username: "",
    password: "",
  };

  const [registerFormValues, setRegisterFormValues] = useState(initRegisterFormValue);

  const handleFormValues = (input, field) => {
    var copy = {...registerFormValues};
    copy[field] = input;
    setRegisterFormValues(copy)
  };

  const dispatch = useDispatch();

  const submitRegister = (event) => {
    event.preventDefault();
    console.log('registerFormValues');
    dispatch({type: "REGISTER_USER", registerFormValues})
  };

  return (
    <AuthentificationComponent
      handleFormValues={handleFormValues}
      submiFunction={submitRegister}
      registerButton={false}
    />
  )
}

export default RegisterContainer;
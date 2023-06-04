import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthentificationComponent from "../../component/Authentification/AuthentificationComponent";

const RegisterContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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


  const submitRegister = (event) => {
    event.preventDefault();
    dispatch({type: "REGISTER_USER", registerFormValues});
    navigate("/");
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
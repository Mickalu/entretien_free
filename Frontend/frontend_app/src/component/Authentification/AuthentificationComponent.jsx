import React from 'react';
import { Link } from "react-router-dom";

const AuthentificationComponent = ({ submiFunction, handleFormValues, registerButton }) => {
  const displayRegisterButton = () => (
    (registerButton) ?
      (
      <Link to="/register">
        <button>Sign up</button>
      </Link>
      ) : (<></>)
  );

  const submitButtonName = registerButton ? "Login" : "Save";

  return (
    <>
      <form onSubmit={submiFunction}>
        <label>
          Username :
          <input type='text' name='username' onChange={(e) => handleFormValues(e.target.value, "username")} />
        </label>

        <label>
          Password :
          <input type='password' name='password' onChange={(e) => handleFormValues(e.target.value, "password")} />
        </label>

        <button type='submit'>{submitButtonName}</button>

        {displayRegisterButton()}
      </form>
    </>
  )
};

export default AuthentificationComponent;
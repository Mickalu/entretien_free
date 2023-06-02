import React from 'react';
import { Link } from "react-router-dom";

const AuthentificationComponent = ({ submiFunction, handleFormValues, registerButton }) => {
  const displayRegisterButton = () => (
    (registerButton) ?
      (
      <Link to="/register">
        <button>Register</button>
      </Link>
      ) : (<></>)
  );

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

        <button type='submit'>Login</button>

        {displayRegisterButton()}
      </form>
    </>
  )
};

export default AuthentificationComponent;
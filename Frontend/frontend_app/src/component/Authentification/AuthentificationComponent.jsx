import React from 'react';
import { Link } from "react-router-dom";

const AuthentificationComponent = ({ submitLogin, handleFormValues }) => (
  <>
    <form onSubmit={submitLogin}>
      <label>
        Username :
        <input type='text' name='username' onChange={(e) => handleFormValues(e.target.value, "username")} />
      </label>

      <label>
        Password :
        <input type='password' name='password' onChange={(e) => handleFormValues(e.target.value, "password")} />
      </label>

      <button type='submit'>Login</button>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </form>
  </>
)

export default AuthentificationComponent;
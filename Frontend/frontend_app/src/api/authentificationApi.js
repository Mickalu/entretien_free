import { Promise } from "es6-promise";

Promise.polyfill();

const defaultHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Request-Method': ['POST', "GET", "OPTIONS", "HEAD"],
  'Content-Type': 'application/json',
};

export const getAuthentificationToken = (valueData) => (
  fetch("http://0.0.0.0:8000/authentification/api-token-auth/", {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(valueData),
  })
  .then(response => response.json())
);

export const createUser = (valueData) => {
  fetch("http://0.0.0.0:8000/registration_user/", {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(valueData),
  })
  .then(response => response.json())
}
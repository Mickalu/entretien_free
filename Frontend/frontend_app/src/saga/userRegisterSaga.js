import { call } from "redux-saga/effects";

import { createUser } from "../api/authentificationApi";

export function* registerUser(formValue){
  try {
    yield call(createUser, formValue);
  }
  catch {

  }
};
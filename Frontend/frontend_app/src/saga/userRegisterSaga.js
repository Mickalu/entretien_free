import { call, put } from "redux-saga/effects";

import { createUser } from "../api/authentificationApi";

export function* registerUser(formValue){
  try {
    const response = yield call(createUser, formValue);
    yield put(console.log(response));
  }
  catch {

  }
};
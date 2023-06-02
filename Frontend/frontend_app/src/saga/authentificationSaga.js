import { call, put } from "redux-saga/effects";

import { getAuthentificationToken } from "../api/authentificationApi";

export function* authentificationLogin(formValues) {
  try {
    const response = yield call(getAuthentificationToken, formValues.loginFormValues);
    yield put(console.log(response));
  }
  catch{

  }
};
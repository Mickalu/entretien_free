import { call, put } from "redux-saga/effects";

import { getAuthentificationToken } from "../api/authentificationApi";
import { updateTokenValue } from "../slice/tokenAuthentificationSlice";
import { getUserTicket } from "./ticketSaga";

export function* authentificationLogin(formValues) {
  try {
    const response = yield call(getAuthentificationToken, formValues.loginFormValues);
    yield put(updateTokenValue(response.token));
    yield call(getUserTicket, response.token);
  }
  catch{

  }
};

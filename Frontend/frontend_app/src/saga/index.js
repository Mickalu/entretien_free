import { takeLeading } from "redux-saga/effects";

import * as authentificationSaga from "./authentificationSaga";
import * as userRegisterSaga from "./userRegisterSaga";

export default function* rootSaga(){
  yield takeLeading("SUBMIT_LOGIN", authentificationSaga.authentificationLogin)
  yield takeLeading("REGISTER_USER", userRegisterSaga.registerUser)
};
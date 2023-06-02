import { takeLeading } from "redux-saga/effects";

import * as authentificationSaga from "./authentificationSaga";


export default function* rootSaga(){
  yield takeLeading("SUBMIT_LOGIN", authentificationSaga.authentificationLogin)
};
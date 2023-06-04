import { takeLeading } from "redux-saga/effects";

import * as authentificationSaga from "./authentificationSaga";
import * as userRegisterSaga from "./userRegisterSaga";
import * as ticketSaga from "./ticketSaga";

export default function* rootSaga(){
  yield takeLeading("SUBMIT_LOGIN", authentificationSaga.authentificationLogin)
  yield takeLeading("REGISTER_USER", userRegisterSaga.registerUser)
  yield takeLeading("CREATE_TICKET", ticketSaga.createTicketSaga)
  yield takeLeading("LIST_USER_TICKET", ticketSaga.getUserTicket)
};
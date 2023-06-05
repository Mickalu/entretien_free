import { call, put } from "redux-saga/effects";

import { createTicket, getUserTicketsApi, updateTicketApi } from "../api/ticketApi";
import { updateTicket } from "../slice/ticketSlice";

export function* getUserTicket(formValues) {
  try {
    const response = yield call(getUserTicketsApi, formValues);
    yield put(updateTicket(response.tickets));
  }
  catch {

  }
};

export function* createTicketSaga(formValues) {
    yield call(createTicket, { 'data': formValues['data'], 'token': formValues['data']['token']});
    yield call(getUserTicket, formValues['data']['token']);
};

export function* updateTicketSaga(formValues) {
  yield call(updateTicketApi, {'data': formValues['data'], 'token': formValues['data']['token']})
  yield call(getUserTicket, formValues['data']['token']);
}
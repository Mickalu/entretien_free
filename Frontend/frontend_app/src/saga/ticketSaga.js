import { call, put } from "redux-saga/effects";

import { createTicket, getUserTicketsApi } from "../api/ticketApi";


export function* getUserTicket(formValues) {
  try {
    yield call(getUserTicketsApi, formValues);
  }
  catch {

  }
};

export function* createTicketSaga(formValues) {
    const response = yield call(createTicket, { 'data': formValues['data'], 'token': formValues['data']['token']});
    yield call(getUserTicket, formValues['data']['token']);
};
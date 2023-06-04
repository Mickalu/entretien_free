import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";

import rootSaga from '../saga';
import tokenAuthentificationReducer from "../slice/tokenAuthentificationSlice";
import ticketReducer from "../slice/ticketSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    tokenAuthentification: tokenAuthentificationReducer,
    ticket: ticketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
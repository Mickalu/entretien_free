import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";

import rootSaga from '../saga';
import tokenAuthentificationReducer from "../slice/tokenAuthentificationSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    tokenAuthentification: tokenAuthentificationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import store from './store';
import AppContainer from './container/AppContainer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </Router>
);

reportWebVitals();
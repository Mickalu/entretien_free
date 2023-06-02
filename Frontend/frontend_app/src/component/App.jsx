import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthentificationContainer from "../container/Authentification/AuthentificationContainer";
import HomeContainer from '../container/HomeContainer';

const App = ({ tokenAuthentification }) => (
  <Routes>
    { tokenAuthentification ? (
      <>
        <Route path="/" element={<HomeContainer />} />
      </>
    ) : (
      <>
        <Route path="/" element={<AuthentificationContainer />} />
      </>
    )}

  </Routes>
);

export default App;
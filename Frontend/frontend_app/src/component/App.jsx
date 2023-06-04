import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthentificationContainer from "../container/Authentification/AuthentificationContainer";
import HomeContainer from '../container/HomeContainer';
import RegisterContainer from '../container/Authentification/RegisterContainer';
import TicketCreationPageContainer from '../container/Ticket/TicketCreationPageContainer';

const App = ({ tokenAuthentification }) => (
  <Routes>
    { tokenAuthentification ? (
      <>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/createTicket" element={<TicketCreationPageContainer />} />
      </>
    ) : (
      <>
        <Route path="/" element={<AuthentificationContainer />} />
        <Route path="/register" element={<RegisterContainer />} />
      </>
    )}

  </Routes>
);

export default App;
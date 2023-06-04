import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthentificationContainer from "../container/Authentification/AuthentificationContainer";
import HomeContainer from '../container/HomeContainer';
import RegisterContainer from '../container/Authentification/RegisterContainer';
import TicketCreationPageContainer from '../container/Ticket/TicketCreationPageContainer';
import TicketPageContainer from '../container/Ticket/TicketPageContainer';

const App = ({ tokenAuthentification }) => (
  <Routes>
    { tokenAuthentification ? (
      <>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/createTicket" element={<TicketCreationPageContainer />} />
        <Route path="/ticketPage" element={<TicketPageContainer />} />
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
import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import HomeComponent from "../component/HomeComponent";

const HomeContainer = () => {
  const navigate = useNavigate();
  const tickets_dict = useSelector((state) => state.ticket);

  const openUpdateTicketPage = (ticketId) => {
    navigate("/ticketPage", {
      state: {
        ticketId: ticketId
      }
    });
  };

  return (
    <HomeComponent
      tickets={tickets_dict.tickets}
      openUpdateTicketPage={openUpdateTicketPage}
    />
  )
}

export default HomeContainer;
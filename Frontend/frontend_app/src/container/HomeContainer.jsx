import React, { useState }  from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import HomeComponent from "../component/HomeComponent";

const HomeContainer = () => {
  const navigate = useNavigate();
  const tickets_dict = useSelector((state) => state.ticket);

  const initSelectValue = "ALL";

  const [selectFilterValue, setSelectFilterValue] = useState(initSelectValue);

  const openUpdateTicketPage = (ticketId) => {
    navigate("/ticketPage", {
      state: {
        ticketId: ticketId
      }
    });
  };

  const filterTicket = (ticket) => {
    if (selectFilterValue == 'ALL') {
      return true
    };

    return ticket.zone == selectFilterValue;
  };
  const listTicketFiltered = tickets_dict.tickets.filter(ticket => filterTicket(ticket));


  return (
    <HomeComponent
      tickets={listTicketFiltered}
      setSelectFilterValue={setSelectFilterValue}
      selectFilterValue={selectFilterValue}
      openUpdateTicketPage={openUpdateTicketPage}
    />
  )
}

export default HomeContainer;
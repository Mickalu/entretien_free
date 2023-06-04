import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import TicketComponent from '../../component/Ticket/TicketComponent';

const TicketPageContainer = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tickets = useSelector((state) => state.ticket.tickets);
  const ticketId = location.state.ticketId;
  const ticketInfo = tickets.filter(ticket => ticket.id == ticketId)[0];

  const token = useSelector((state) => state.tokenAuthentification.token);

  const initFormValue = {
    priority: ticketInfo.priority,
    zone: ticketInfo.zone,
  };

  const [formValues, setFormValues] = useState(initFormValue);
  const handleFormeValues = (input, field) => {
    var copy = {...formValues};
    copy[field] = input;
    setFormValues(copy);
  };

  const submitUpdateTicket = (event) => {
    event.preventDefault();
    formValues['token'] = token;
    formValues['id'] = ticketId;
    dispatch({type: "UPDATE_TICKET", data: formValues});
    navigate("/");
  };

  return (
    <TicketComponent
      ticketInfo={ticketInfo}
      formValues={formValues}
      submitFunction={submitUpdateTicket}
      handleFormeValues={handleFormeValues}
    />
  )
};

export default TicketPageContainer;
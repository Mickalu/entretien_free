import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TicketCreationComponent from '../../component/Ticket/TicketCreationComponent';

const TicketCreationPageContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.tokenAuthentification.token);

  const initFormValule = {
    priority: 0,
    zone: 'A',
  };

  const [formValues, setFormValues] = useState(initFormValule);

  const handleFormeValues = (input, field) => {
    var copy = {...formValues};
    copy[field] = input;
    setFormValues(copy);
  };

  const submitCreationTicket = (event) => {
    event.preventDefault();
    formValues['token'] = token;
    dispatch({type: "CREATE_TICKET", data: formValues});
    navigate("/");
  };

  return (
    <TicketCreationComponent
      submitCreationTicket={submitCreationTicket}
      handleFormeValues={handleFormeValues}
    />
  )
};

export default TicketCreationPageContainer;
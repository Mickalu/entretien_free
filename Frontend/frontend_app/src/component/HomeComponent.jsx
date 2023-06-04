import React from 'react';
import { Link } from "react-router-dom";


const HomeComponent = ({tickets, openUpdateTicketPage}) => {
  return (
    <div style={{display: 'flex'}}>
      <div>
        <Link to="/createTicket">
          <button>create ticket</button>
        </Link>
      </div>
      <div>
        {tickets.map((ticket) => {
         return (
          <div style={{display: 'flex', cursor: 'pointer'}} key={`div-ticket${ticket.id}`} onClick={() => openUpdateTicketPage(ticket.id)}>
            <p>{ticket.priority}</p>
            <p>{ticket.zone}</p>
          </div>
         )
        })}
      </div>
    </div>
  )
}

export default HomeComponent;
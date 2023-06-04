import React from 'react';
import { Link } from "react-router-dom";


const HomeComponent = ({tickets, openUpdateTicketPage, setSelectFilterValue, selectFilterValue}) => {
  return (
    <div style={{display: 'flex'}}>
      <div>
        <Link to="/createTicket">
          <button>create ticket</button>
        </Link>
      </div>
      <div>
        <select name='zone' value={selectFilterValue} onChange={(event) => setSelectFilterValue(event.target.value)}>
          <option value={'ALL'}>ALL</option>
          <option value={'A'}>A</option>
          <option value={'B'}>B</option>
          <option value={'C'}>C</option>
          <option value={'D'}>D</option>
          <option value={'E'}>E</option>
          <option value={'F'}>F</option>
          <option value={'G'}>G</option>
          <option value={'H'}>H</option>
        </select>
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
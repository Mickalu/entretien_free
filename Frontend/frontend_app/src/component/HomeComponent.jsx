import React from 'react';
import { Link } from "react-router-dom";


const HomeComponent = () => {
  return (
    <div style={{display: 'flex'}}>
      <div>
        <Link to="/createTicket">
          <button>create ticket</button>
        </Link>
      </div>
    </div>
  )
}

export default HomeComponent;
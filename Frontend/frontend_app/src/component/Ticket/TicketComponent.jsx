import React from 'react';

const TicketComponent = ({ticketInfo, formValues, handleFormeValues, submitFunction}) => {
  return (
    <>
      <form onSubmit={submitFunction}>
        <label>
          Priority :
          <input type="number" value={formValues.priority} name='priority' onChange={(event) => handleFormeValues(event.target.value, 'priority')} />
        </label>

        <label>
          Zone :
          <select name='zone' value={formValues.zone} onChange={(event) => handleFormeValues(event.target.value, 'zone')}>
            <option value={'A'}>A</option>
            <option value={'B'}>B</option>
            <option value={'C'}>C</option>
            <option value={'D'}>D</option>
            <option value={'E'}>E</option>
            <option value={'F'}>F</option>
            <option value={'G'}>G</option>
            <option value={'H'}>H</option>
          </select>
        </label>

        <button type='submit'>update</button>
      </form>
    </>
  )
};

export default TicketComponent;
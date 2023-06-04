import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
};

const updateTicketValueFunction = (state, action) => {
  state.tickets = action.payload
};

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState: initialState,
  reducers: {
    updateTicket: updateTicketValueFunction,
  }
});

export const { updateTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
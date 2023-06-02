import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: "",
};

const updateTokenValueFunction = (state, action) => (
  state.token = action.payload
);

export const tokenAuthentificationSlice = createSlice({
  name: "tokenAuthentification",
  initialState: initialState,
  reducers: {
    updateTokenValue: updateTokenValueFunction,
  }
});

export const { updateTokenValue } = tokenAuthentificationSlice.actions;
export default tokenAuthentificationSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const chatMessagessSlice = createSlice({
  name: "chatMessages",
  initialState: [],
  reducers: {
    setMessages: (state, action) => {
      state.splice(0, state.length, ...action.payload);
    },
    addMessage: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setMessages, addMessage } = chatMessagessSlice.actions;

export default chatMessagessSlice.reducer;

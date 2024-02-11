import { createSlice } from '@reduxjs/toolkit';

export const chatMessagesSlice = createSlice({
  name: "chatMessages",
  initialState: {
    messages: [],
  },
  reducers: {
    setMessage: (state, action) => {
      state.messages = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
      console.log(state.messages);
    },
  },
});

export const { setMessage, addMessage } = chatMessagesSlice.actions;

export default chatMessagesSlice.reducer;

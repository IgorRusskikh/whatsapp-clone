import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatId: null,
    oldChatId: null,
  },
  reducers: {
    setChat: (state, action) => {
      state.oldChatId = state.chatId;
      state.chatId = action.payload;
    },
  },
});

export const { setChat } = chatSlice.actions;

export default chatSlice.reducer;

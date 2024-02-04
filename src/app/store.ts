import chatSlice from '@/features/chat/chatSlice';
import chatMessagesSlice from '@/features/chatMessages/chatMessagesSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    chatMessages: chatMessagesSlice,
    chat: chatSlice,
  },
});

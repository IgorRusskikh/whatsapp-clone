import { useDispatch, useSelector } from 'react-redux';

import { addMessage } from '@/features/chatMessages/chatMessagesSlice';
import useSocket from '@/hooks/useSocket';

import AuthForm from './AuthForm';
import ChatList from './ChatList';
import DefaultScreen from './DefaultScreen';
import HeaderChat from './HeaderChat';
import HeaderChats from './HeaderChats';
import InputMessage from './InputMessage';
import Messages from './Messages';
import SearchChats from './searchChats';

const MainWindow = () => {
  const user = useSelector((state) => state.user);
  const chat = useSelector((state) => state.chat);

  const dispatch = useDispatch();

  const socket = useSocket("http://localhost:8000", (message: string) => {
    dispatch(
      addMessage({
        chatId: message.room,
        message: message.message,
        sender: message.sender,
        reciever: message.reciever,
        createdAt: new Date().toISOString(),
      })
    );
  });

  return (
    <>
      {user.user ? (
        <>
          <div className="w-2/5 h-full flex-col border-r border-[#2f3b43]">
            <HeaderChats />
            <SearchChats />
            <ChatList socket={socket} />
          </div>
          <div className="flex flex-col justify-between w-full h-full">
            {chat.chatId ? (
              <>
                <HeaderChat />
                <Messages />
                <InputMessage socket={socket} />
              </>
            ) : (
              <DefaultScreen />
            )}
          </div>
        </>
      ) : (
        <AuthForm />
      )}
    </>
  );
};

export default MainWindow;

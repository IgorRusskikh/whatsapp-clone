import { useSelector } from 'react-redux';

import Chat from '../ui/Chat';
import DefaultScreen from '../ui/DefaultScreen';
import Message from '../ui/Message';
import MessageInput from '../ui/MessageInput';

const ChatWindow = ({ socket, messages }) => {
  const chat = useSelector((state) => state.chat);

  return (
    <>
      {chat ? (
        <div className="w-full h-full bg-[#111b21] border-l border-[#e9edef1f] relative">
          <Chat />
          <div className="flex flex-col items-center gap-1 w-full py-5">
            <div className="flex flex-col items-end w-[95%] text-sm gap-1">
              {messages.map((message, index) => {
                return (
                  <Message key={index} date="10:30 PM">
                    {message}
                  </Message>
                );
              })}
            </div>
          </div>
          <MessageInput socket={socket} />
        </div>
      ) : (
        <DefaultScreen />
      )}
    </>
  );
};

export default ChatWindow;

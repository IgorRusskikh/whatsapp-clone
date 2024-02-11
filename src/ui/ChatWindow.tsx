import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import useMessages from '@/hooks/useMessages';

import Chat from '../ui/Chat';
import DefaultScreen from '../ui/DefaultScreen';
import MessageInput from '../ui/MessageInput';
import Message from './Message';

const ChatWindow = ({ socket }) => {
  const chat = useSelector((state) => state.chat);
  const message = useMessages("65c2641ab0cee5b68cedc3b3");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([...message, ...messages]);
    console.log(...message);
  }, [message]);

  return (
    <>
      {chat ? (
        <div className="w-full h-full bg-[#111b21] border-l border-[#e9edef1f] relative">
          <Chat />
          <div className="flex flex-col items-center gap-1 w-full py-5">
            <div className="flex flex-col items-end w-[95%] text-sm gap-1">
              {messages &&
                messages.map((message, index) => {
                  return (
                    <Message key={index} date="10:30 PM">
                      {message.message}
                    </Message>
                  );
                })}
            </div>
          </div>
          <MessageInput
            messages={messages}
            setMessages={setMessages}
            socket={socket}
          />
        </div>
      ) : (
        <DefaultScreen />
      )}
    </>
  );
};

export default ChatWindow;

"use client";

import { useEffect, useState } from 'react';

import useSocket from '@/hooks/useSocket';

import Chat from '../ui/Chat';
import Chats from '../ui/Chats';
import DefaultScreen from '../ui/DefaultScreen';
import Message from '../ui/Message';
import MessageInput from '../ui/MessageInput';

export default function Home() {
  const [room, setRoom] = useState();
  const [newMessage, setNewMessage] = useState("");
  const [chat, setChat] = useState(undefined);

  const [socket, messages, setMessages] = useSocket("http://localhost:8000");

  useEffect(() => {
    if (socket) {
      socket.emit("join", { room: "1" });
    }
  }, [room]);

  return (
    <div className="flex justify-center w-auto mx-48">
      <div className="flex w-full h-[100vh] py-4" onClick={() => setRoom(1)}>
        <Chats
          setRoom={setRoom}
          setChat={setChat}
          messages={messages}
          setMessages={setMessages}
        />
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
            <MessageInput
              socket={socket}
              newMessage={newMessage}
              setNewMessage={setNewMessage}
              messages={messages}
              setMessages={setMessages}
            />
          </div>
        ) : (
          <DefaultScreen />
        )}
      </div>
    </div>
  );
}

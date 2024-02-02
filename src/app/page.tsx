"use client";

import { useState } from 'react';

import Chat from '../../ui/Chat';
import Chats from '../../ui/Chats';
import Message from '../../ui/Message';
import MessageInput from '../../ui/MessageInput';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="flex justify-center w-auto mx-48">
      <div className="flex w-full h-[100vh] py-4">
        <Chats />
        {/* <DefaultScreen /> */}
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
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            messages={messages}
            setMessages={setMessages}
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import useSocket from '@/hooks/useSocket';
import ChatWindow from '@/ui/ChatWindow';

import Chats from '../ui/Chats';
import store from './store';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const socket = useSocket("http://localhost:8000", (message: string) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  });

  useEffect(() => {
    console.log(messages)
  }, [messages])

  return (
    <Provider store={store}>
      <div className="flex justify-center w-auto mx-48">
        <div className="flex w-full h-[100vh] py-4">
          <Chats socket={socket} />
          <ChatWindow socket={socket} messages={messages} />
        </div>
      </div>
    </Provider>
  );
}

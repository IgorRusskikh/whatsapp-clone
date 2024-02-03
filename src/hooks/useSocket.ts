import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const useSocket = (url: string) => {
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socketIo = io(url);

    if (socketIo) {
      setSocket(socketIo);
    }

    socketIo.on("connect", () => {
      console.log("Connected to server");
    });

    socketIo.on("message", (message: any) => {
      console.log(...messages);
      setMessages([...messages, message]);
    });

    return () => {
      socketIo.close();
    };
  }, []);

  return [socket, messages, setMessages];
};

export default useSocket;

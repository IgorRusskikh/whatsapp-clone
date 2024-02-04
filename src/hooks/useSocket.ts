import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const useSocket = (url: string, msgCb: Function) => {
  const [socket, setSocket] = useState();
  useEffect(() => {
    const socketIo = io(url);

    if (socketIo) {
      setSocket(socketIo);
    }

    socketIo.on("connect", () => {
      console.log("Connected to server");
    });

    socketIo.on("message", (message: any) => {
      msgCb(message);
    });

    return () => {
      socketIo.close();
    };
  }, []);

  return socket;
};

export default useSocket;

import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Input from '../components/Input';
import ChatsHeader from './ChatsHeader';

const MessageInput = ({
  socket,
  setMessages,
  messages,
}: {
  socket: any;
  setMessages: Function;
  messages: [];
}) => {
  const [newMessage, setNewMessage] = useState("");
  const chat = useSelector((state) => state.chat);

  const sendMessage = async () => {
    const message = await fetch("/api/chats/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: newMessage,
        reciever: "65c26381b0cee5b68cedc3ae",
        sender: "65c26386b0cee5b68cedc3af",
        chatId: chat.chatId,
      }),
    });

    console.log(await message.json())

    socket.emit("message", {
      room: chat.chatId,
      message: newMessage,
    });
    setMessages([...messages, { message: newMessage }]);

    console.log(messages);
  };

  return (
    <div className="absolute bottom-0 bg-[#202c33] w-full">
      <ChatsHeader>
        <div className="flex gap-4 items-center w-full">
          <Image width={24} height={24} src="/svg/smile.svg" alt="" />
          <Image width={24} height={24} src="/svg/plus.svg" alt="" />
          <Input
            onChange={(evt: any) => setNewMessage(evt.target.value)}
            classes="bg-[#2a3942] rounded-lg pl-4 w-full"
          >
            Введите сообщение
          </Input>
          {/* <SvgMicrophone /> */}
          <div onClick={sendMessage}>
            <Image src="/svg/send.svg" width={24} height={24} alt="" />
          </div>
        </div>
      </ChatsHeader>
    </div>
  );
};

export default MessageInput;

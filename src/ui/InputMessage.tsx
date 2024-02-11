import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const InputMessage = ({ socket }) => {
  const [newMessage, setNewMessage] = useState("");
  const chat = useSelector((state) => state.chat);
  const userId = useSelector((state) => state.user.user.id);
  const dispatch = useDispatch();

  const sendMessage = async () => {
    const messageData = {
      message: newMessage,
      reciever: chat.chatId,
      sender: userId,
      chatId: chat.chatId,
    };

    socket.emit("message", {
      room: chat.chatId,
      message: newMessage,
      sender: userId,
      reciever: chat.chatId,
    });

    setNewMessage("");

    await fetch("/api/chats/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    });
  };

  return (
    <div className="flex items-center gap-5 w-full absolute bottom-0 bg-[#202c33] px-7 py-3">
      <div className="flex gap-4">
        <Image src="/svg/smile.svg" width={26} height={26} alt="" />
        <Image src="/svg/plus.svg" width={26} height={26} alt="" />
      </div>
      <div className="w-full">
        <input
          className="w-full bg-[#2a3942] px-4 py-3 rounded-lg text-[#c7d7d1] text-sm placeholder:text-[#8696a0] outline-none"
          type="text"
          placeholder="Введите сообщение"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
        />
      </div>
      <div className="cursor-pointer" onClick={() => sendMessage()}>
        <Image src="/svg/send.svg" width={26} height={26} alt="" />
      </div>
    </div>
  );
};

export default InputMessage;

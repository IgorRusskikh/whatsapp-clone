import { useState } from 'react';
import { useSelector } from 'react-redux';

import SvgPlus from '../../public/svg/plus';
import SvgSend from '../../public/svg/send';
import SvgSmile from '../../public/svg/smile';
import Input from '../components/Input';
import ChatsHeader from './ChatsHeader';

const MessageInput = ({ socket }: { socket: any }) => {
  const [newMessage, setNewMessage] = useState("");
  const chat = useSelector((state) => state.chat);

  const sendMessage = () => {
    socket.emit("message", {
      room: chat.chatId,
      message: newMessage,
    });
  };

  return (
    <div className="absolute bottom-0 bg-[#202c33] w-full">
      <ChatsHeader>
        <div className="flex gap-4 items-center w-full">
          <SvgSmile />
          <SvgPlus />
          <Input
            onChange={(evt: any) => setNewMessage(evt.target.value)}
            classes="bg-[#2a3942] rounded-lg pl-4 w-full"
          >
            Введите сообщение
          </Input>
          {/* <SvgMicrophone /> */}
          <div onClick={sendMessage}>
            <SvgSend />
          </div>
        </div>
      </ChatsHeader>
    </div>
  );
};

export default MessageInput;

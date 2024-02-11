import Image from 'next/image';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import useUser from '@/hooks/useUser';

import Input from '../components/Input';
import Message from './ChatMessage';

const Chats = ({ socket }: { socket: any }) => {
  const [user] = useUser();
  const chat = useSelector((state: any) => state.chat);

  useEffect(() => {
    if (socket) {
      if (chat.chatId) {
        socket.emit("leave", { room: chat.oldChatId });
      }

      socket.emit("join", { room: chat.chatId });
    }
  }, [socket, chat]);

  return (
    <div className="h-full bg-[#111b21]">
      <div className="w-2/5">
        <div className="flex justify-between items-center w-full bg-[#202c33] px-4 py-3">
          <Image src="/svg/user.svg" width={40} height={40} alt="" />
          <div className="flex">
            {headerSvgs.map((svg, index) => (
              <Image key={index} src={svg} width={24} height={24} alt="" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-auto">
        <div className="pl-3 w-full flex my-2 items-center">
          <div className="flex items-center bg-[#202c33] w-full pl-3 rounded-lg">
            <Image src="/svg/search.svg" width={28} height={28} alt="" />
            <Input classes="bg-transparent">Поиск чатов или новый чат</Input>
          </div>
          <div className="mx-2">
            <Image src="/svg/filter.svg" width={28} height={28} alt="" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            {user?.chats.map((chat: any) => (
              <div key={chat.id}>
                <Message chatData={chat} />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-1 w-full text-xs my-4">
            <span className="mx-1">
              <Image src="/svg/lock.svg" width={12} height={12} alt="" />
            </span>
            <span className="text-white">Ваши личные сообщения </span>
            <span className="text-[#53bdeb] cursor-pointer">
              защищены сквозным шифрованием
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const headerSvgs = [
  "/svg/community.svg",
  "/svg/status.svg",
  "/svg/new-chat-outline.svg",
  "/svg/menu.svg",
];

export default Chats;

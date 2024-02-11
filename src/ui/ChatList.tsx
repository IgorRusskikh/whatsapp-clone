import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setChat } from '@/features/chat/chatSlice';

const ChatList = ({ socket }: { socket: any }) => {
  const user = useSelector((state) => state.user);
  const activeChat = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (socket) {
      if (activeChat.chatId) {
        socket.emit("leave", { room: activeChat.oldChatId });
      }

      socket.emit("join", { room: activeChat.chatId });
    }
  }, [activeChat]);

  useEffect(() => {
    setChats(user.user.chats);
  }, [user.id]);

  return (
    <div className="w-full">
      <div className="bg-white"></div>
      {chats &&
        chats.map((chat: any) => (
          <div
            key={chat.id}
            className="flex px-3 py-3 cursor-pointer hover:bg-[#202c33] border-b border-[#222d34]"
            onClick={() => dispatch(setChat(chat.id))}
          >
            <Image src="svg/user.svg" width={49} height={49} alt="" />
            <div className="flex flex-col w-full ml-5">
              <div className="flex justify-between">
                <h1 className="text-[#e9edef]">{chat.reciever}</h1>
                <span className="text-[#8696a0] text-xs">Вчера</span>
              </div>
              <div>
                <div className="text-[#8696a0] text-sm">
                  Lorem ipsum dolor sit amet consectetur...
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ChatList;

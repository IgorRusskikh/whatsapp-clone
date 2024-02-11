import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { setChat } from '@/features/chat/chatSlice';

const Message = ({ chatData }: { chatData: any }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(setChat(chatData.id));
      }}
      className="flex items-center text-left text-white relative cursor-pointer hover:bg-[#202c33]"
    >
      <div className="px-4">
        <Image src="/svg/user.svg" width={60} height={60} alt="" />
      </div>
      <div className="flex flex-col h-full w-full border-b border-[#222d34] py-4">
        <h2 className="text-[17px]">{chatData.reciever}</h2>
        <p className="text-[#8696a0] text-sm">
          Lorem ipsum dolor sit amet consectetur...
        </p>
      </div>
      <div className="absolute right-3 top-3 text-xs">
        <p className="text-[#8696a0]">Вчера</p>
      </div>
    </div>
  );
};

export default Message;

import { useDispatch, useSelector } from 'react-redux';

import { setChat } from '@/features/chat/chatSlice';

import SvgUser from '../../public/svg/default-user';

const Message = ({ id }: { id: string }) => {
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat);

  return (
    <div
      onClick={() => {
        dispatch(setChat(id));
      }}
      className="flex items-center text-left text-white relative cursor-pointer hover:bg-[#202c33]"
    >
      <div className="px-4">
        <SvgUser height={"50"} width={"50"} />
      </div>
      <div className="flex flex-col h-full w-full border-b border-[#222d34] py-4">
        <h2 className="text-[17px]">Мама</h2>
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

const chats = [
  ["sddfs", "1231", "12"],
  ["sddfs", "1231", "12", "jyutjujl"],
  ["sddfs", "1231"],
  ["sddfs", "1231", "12", "jyutjujl", "s3e12e122"],
];

export default Message;

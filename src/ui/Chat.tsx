import Image from 'next/image';

import ChatsHeader from './ChatsHeader';

const Chat = () => {
  return (
    <ChatsHeader>
      <div className="flex items-center gap-4 text-[#e9edef]">
        <span>
          <Image src="/svg/user.svg" width={40} height={40} alt="" />
        </span>
        <span>+2425345634</span>
      </div>
      <div className="flex items-center gap-5">
        <Image src="/svg/search.svg" width={30} height={30} alt="" />
        <Image src="/svg/menu.svg" width={30} height={30} alt="" />
      </div>
    </ChatsHeader>
  );
};

export default Chat;

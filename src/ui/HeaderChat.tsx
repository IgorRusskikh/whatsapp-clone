import Image from 'next/image';
import { useSelector } from 'react-redux';

const HeaderChat = () => {
  const username = useSelector(
    (state) => state.user.user.username || state.user.user.phone
  );

  return (
    <div className="flex justify-between items-center w-full bg-[#202c33] px-4 py-3">
      <div className="flex items-center gap-5 text-[#e9edef]">
        <Image src="/svg/user.svg" width={40} height={40} alt="" />
        <h1 className='select-text'>{username}</h1>
      </div>
      <div className="flex gap-5">
        <Image src="/svg/search.svg" width={30} height={30} alt="" />
        <Image src="/svg/menu.svg" width={24} height={24} alt="" />
      </div>
    </div>
  );
};

export default HeaderChat;

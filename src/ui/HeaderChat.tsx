import Image from 'next/image';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const HeaderChat = () => {
  const msgs = useSelector((state) => state.chatMessages);
  const user = useSelector((state) => state.user.user);

  console.log(user);

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(addMessage('sdfsdf'))
  // }, [])

  useEffect(() => {
    console.log(msgs);
  }, [msgs.messages]);

  return (
    <div className="flex justify-between items-center w-full bg-[#202c33] px-4 py-3">
      <div className="flex items-center gap-5 text-[#e9edef]">
        <Image src="/svg/user.svg" width={40} height={40} alt="" />
        <h1>{user.username || user.phone}</h1>
      </div>
      <div className="flex gap-5">
        <Image src="/svg/search.svg" width={30} height={30} alt="" />
        <Image src="/svg/menu.svg" width={24} height={24} alt="" />
      </div>
    </div>
  );
};

export default HeaderChat;

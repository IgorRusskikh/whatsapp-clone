import Image from 'next/image';

const HeaderChats = () => {
  return (
    <div className="flex justify-between items-center w-full bg-[#202c33] px-4 py-3">
      <Image src="/svg/user.svg" width={40} height={40} alt="" />
      <div className="flex gap-5">
        {headerSvgs.map((svg, index) => (
          <Image
            className="cursor-pointer"
            key={index}
            src={svg}
            width={24}
            height={24}
            alt=""
          />
        ))}
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

export default HeaderChats;

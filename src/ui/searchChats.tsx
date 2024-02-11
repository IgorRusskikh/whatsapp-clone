import Image from 'next/image';

const SearchChats = () => {
  return (
    <div className="flex w-full px-3 py-2">
      <div className="flex w-full">
        <div className="flex w-full px-3 py-1 bg-[#202c33] rounded-md">
          <Image src="/svg/search.svg" width={24} height={24} alt="" />
          <input
            type="text"
            className="w-full ml-5 bg-transparent text"
            placeholder="Поиск чатов или новый чат"
          />
        </div>
        <Image
          className="ml-2"
          src="/svg/filter.svg"
          width={24}
          height={24}
          alt=""
        />
      </div>
    </div>
  );
};

export default SearchChats;

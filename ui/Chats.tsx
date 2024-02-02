import SvgFilter from '../public/svg/filter';
import Lock from '../public/svg/lock';
import SvgSearch from '../public/svg/search';
import Message from '../ui/Message';
import ChatsHeader from './ChatsHeader';

const Chats = () => {
  return (
    <div className="h-full w-[50%] bg-[#111b21]">
      <ChatsHeader />
      <div className="flex flex-col w-full h-auto">
        <div className="pl-3 w-full flex my-2 items-center">
          <div className="flex items-center bg-[#202c33] w-full pl-3 rounded-lg">
            <SvgSearch />
            <input
              type="text"
              className="bg-transparent px-2 py-2 text-white outline-none select-none"
              placeholder="Поиск чатов или новый чат"
            />
          </div>
          <div className="mx-2">
            <SvgFilter />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            {[1, 2, 3, 4].map((msg, index) => (
              <Message key={index} />
            ))}
          </div>
          <div className="flex justify-center items-center gap-1 w-full text-xs my-4">
            <span className="mx-1">
              <Lock />
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

export default Chats;

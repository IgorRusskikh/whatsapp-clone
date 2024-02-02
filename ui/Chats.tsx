import Input from '../components/Input';
import SvgCommunityOutline from '../public/svg/community-outline';
import SvgUser from '../public/svg/default-user';
import SvgFilter from '../public/svg/filter';
import Lock from '../public/svg/lock';
import SvgMenu from '../public/svg/menu';
import SvgNewChat from '../public/svg/new-chat-outline';
import SvgSearch from '../public/svg/search';
import SvgStatusOutline from '../public/svg/status-outline';
import Message from './ChatMessage';
import ChatsHeader from './ChatsHeader';

const Chats = ({
  setChat,
  messages,
  setMessages,
}: {
  setChat: Function;
  messages: any[];
  setMessages: Function;
}) => {
  return (
    <div className="h-full w-[50%] bg-[#111b21]">
      <ChatsHeader>
        <span>
          <SvgUser height="40" width="40" />
        </span>
        <div className="flex gap-6">
          {headerSvgs.map((svg, index) => (
            <span key={index} className="cursor-pointer">
              {svg}
            </span>
          ))}
        </div>
      </ChatsHeader>
      <div className="flex flex-col w-full h-auto">
        <div className="pl-3 w-full flex my-2 items-center">
          <div className="flex items-center bg-[#202c33] w-full pl-3 rounded-lg">
            <SvgSearch />
            <Input>Поиск чатов или новый чат</Input>
          </div>
          <div className="mx-2">
            <SvgFilter />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            {[1, 2, 3, 4].map((msg, index) => (
              <Message
                index={index}
                setChat={setChat}
                messages={messages}
                setMessages={setMessages}
                key={index}
              />
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

const headerSvgs = [
  <SvgCommunityOutline />,
  <SvgStatusOutline />,
  <SvgNewChat />,
  <SvgMenu />,
];

export default Chats;

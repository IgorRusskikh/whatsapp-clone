import SvgUser from '../public/svg/default-user';
import SvgMenu from '../public/svg/menu';
import SvgSearch from '../public/svg/search';
import ChatsHeader from '../ui/ChatsHeader';

const Chat = () => {
  return (
    <ChatsHeader>
      <div className="flex items-center gap-4 text-[#e9edef]">
        <span>
          <SvgUser height="40" width="40" />
        </span>
        <span>+2425345634</span>
      </div>
      <div className="flex gap-5">
        <SvgSearch />
        <SvgMenu />
      </div>
    </ChatsHeader>
  );
};

export default Chat;

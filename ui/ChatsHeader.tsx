import SvgCommunityOutline from '../public/svg/community-outline';
import SvgUser from '../public/svg/default-user';
import SvgMenu from '../public/svg/menu';
import SvgNewChat from '../public/svg/new-chat-outline';
import SvgStatusOutline from '../public/svg/status-outline';

const ChatsHeader = () => {
  return (
    <div className="flex justify-between items-center bg-[#202c33] px-4 py-3">
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
    </div>
  );
};

const headerSvgs = [
  <SvgCommunityOutline />,
  <SvgStatusOutline />,
  <SvgNewChat />,
  <SvgMenu />,
];

export default ChatsHeader;

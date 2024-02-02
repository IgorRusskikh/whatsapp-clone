import Chats from '../../ui/Chats';

export default function Home() {
  return (
    <div className="flex justify-center w-auto mx-48">
      <div className="flex w-full h-[100vh] py-4">
        <Chats />
        <div className="w-full h-full bg-[#222e35]"></div>
      </div>
    </div>
  );
}

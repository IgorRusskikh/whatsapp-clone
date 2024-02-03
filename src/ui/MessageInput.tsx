import SvgPlus from '../../public/svg/plus';
import SvgSend from '../../public/svg/send';
import SvgSmile from '../../public/svg/smile';
import Input from '../components/Input';
import ChatsHeader from './ChatsHeader';

const MessageInput = ({
  socket,
  newMessage,
  setNewMessage,
  messages,
  setMessages,
}: {
  socket: any;
  newMessage: string;
  setNewMessage: Function;
  messages: any[];
  setMessages: Function;
}) => {
  return (
    <div className="absolute bottom-0 bg-[#202c33] w-full">
      <ChatsHeader>
        <div className="flex gap-4 items-center w-full">
          <SvgSmile />
          <SvgPlus />
          <Input
            onChange={(evt: any) => setNewMessage(evt.target.value)}
            classes="bg-[#2a3942] rounded-lg pl-4 w-full"
          >
            Введите сообщение
          </Input>
          {/* <SvgMicrophone /> */}
          <div
            onClick={() => {
              socket.emit("message", { room: "1",message: newMessage });
              setMessages([...messages, newMessage]);
            }}
          >
            <SvgSend />
          </div>
        </div>
      </ChatsHeader>
    </div>
  );
};

export default MessageInput;
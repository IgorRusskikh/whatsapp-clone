import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setMessage } from '@/features/chatMessages/chatMessagesSlice';

const Messages = () => {
  const messages = useSelector((state) => state.chatMessages);
  const chat = useSelector((state) => state.chat);
  const userId = useSelector((state) => state.user.user.id);

  const dispatch = useDispatch();

  useEffect(() => {
    const getMessages = async () => {
      const messages = await fetch("/api/chats/get-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: chat.chatId,
        }),
      });

      const data = await messages.json();

      dispatch(setMessage(data.messages));

      return data.messages;
    };

    if (chat.chatId != null) {
      getMessages();
      console.log(messages.messages);
    }
  }, [chat.chatId]);

  return (
    <div className="w-full max-h-[82%] h-[82%] pb-7 overflow-y-scroll">
      {messages.messages.length &&
        messages.messages.map((message, index) => (
          <div
            key={index}
            className={
              "flex w-full px-12 pt-5 select-text " +
              (message.sender === userId ? "justify-end" : "justify-start")
            }
          >
            <div
              className={`flex items-end  px-3 py-1 rounded-lg relative bg-[${
                message.sender === userId ? "#005c4b" : "#202c33"
              }]`}
            >
              <div className="text-[#e9edef]">{message.message}</div>
              <span className="float float-right ml-3 text-xs text-[#99beb7]">
                {`${new Date(message.createdAt)
                  .toLocaleTimeString()
                  .split(":")
                  .splice(0, 2)
                  .join(":")}`}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Messages;

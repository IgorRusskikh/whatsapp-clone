import { useEffect, useState } from 'react';

const useMessages = (id: string) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = await fetch("/api/chats/get-chat", {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });

      const res = await messages.json();

      setMessages(res.messages);
    };

    fetchMessages();
  }, []);

  return messages;
};

export default useMessages;

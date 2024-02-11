import { useEffect, useState } from 'react';

const useChats = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const fetchedChats = await fetch("/api/chats", {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: "111111111",
          }),
        });

        setChats(await fetchedChats.json());
      } catch (err) {
        console.log(err);
      }
    };

    fetchChats();
  }, []);

  return [chats, setChats];
};

export default useChats;

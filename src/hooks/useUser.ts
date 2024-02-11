import { useEffect, useState } from 'react';

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await fetch("/api/users/get-user", {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: "222222222",
          }),
        });

        setUser(await fetchedUser.json());
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  return [user, setUser];
};

export default useUser;

import { useEffect, useState } from "react";
import { useStore } from "../store";
import { getMe } from "../utils/apiRequest";

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const setUser = useStore((state) => state.setUser);
  const user = useStore((state) => state.user);

  useEffect(() => {
    if (user) return setLoading(false);

    (async () => {
      const result = await getMe();

      if (result?.status === "success") {
        setUser(result.data.user);
      } else {
        setUser(null);
      }

      setLoading(false);
    })();
  }, []);

  return { loading, user };
};

export default useAuth;

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  const getUserProfile = () => {
    if (!user) {
      axios.get("/api/auth/profile").then(({ data }) => {
        setUser(data);
        setReady(true);
      });
    }
  };

  useEffect(() => {
    getUserProfile();
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}

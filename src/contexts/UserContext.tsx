import React, { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

interface UserContextProps {
  code: string;
  password: string;
  token: string | null;
  setToken: (value: any) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export default UserContext;

export function UserProvider({ children }: any) {
  const [token, setToken] = useLocalStorage("token", {});

  const contextData: UserContextProps = {
    code: "",
    password: "",
    token,
    setToken,
  };

  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  );
}

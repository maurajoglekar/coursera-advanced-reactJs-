import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: "John",
    email: "john@example.com",
    dob: "01/01/2000",
  });
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

/* custom hook to provide access to the user context without exporting it*/
export const useUser = () => useContext(UserContext);

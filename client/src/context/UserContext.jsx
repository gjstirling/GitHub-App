import { createContext, useState, useContext } from "react";


export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({name: "Graeme", id: "1"});

  return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>;
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserContextProvider");
    }
    return context;
}

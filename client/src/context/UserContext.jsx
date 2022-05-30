import jwt_decode from 'jwt-decode';
import { createContext, useState, useContext, useEffect } from "react";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(()=>{
    const token = window.localStorage.getItem('token')
    if (token){
      var decoded = jwt_decode(token)
      console.log(decoded)
      setUser({id: decoded.id, firstname: decoded.firstname})
    }

  }, [])

  return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>;
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserContextProvider");
    }
    return context;
}

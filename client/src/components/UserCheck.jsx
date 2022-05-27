import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const UserCheck = ({ children }) => {

  const [user] = useUser();
  if (!user) {
    return <>{children}</>;
  }
  return <Navigate to="/"> </Navigate>;
};

export default UserCheck;

import React, { useContext } from "react";
import { authContext } from "../contexts/AuthContext";
import Login from "./Login";

const ProtectedRoutes = ({ children}) => {
  const { loggedIn } = useContext(authContext)
  return <>{loggedIn ? children : <Login/>}</>;
};

export default ProtectedRoutes;
 
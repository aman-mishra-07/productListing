import React from "react";

const ProtectedRoutes = ({ children, loggedIn }) => {
  return <>{loggedIn ? children : ''}</>;
};

export default ProtectedRoutes;
 
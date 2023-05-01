import React from "react";
import AuthContext from "./AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, redirectTo }) => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;

import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/auth";


export const PrivateRoute = ({ ...rest }) => {
  const { signed } = useContext(AuthContext);

  if (signed) {
    return <Outlet {...rest} />;
  } else {
    return <Navigate to="login" />;
  }
};
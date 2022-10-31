import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = (props) => {
  let logged = true;
  return logged ? <Outlet context={props} /> : <Navigate to="/" />;
};

export default PrivateRoutes;

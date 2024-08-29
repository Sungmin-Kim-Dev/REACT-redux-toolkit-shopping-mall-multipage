/* eslint-disable react/prop-types */
import React from "react";
import { Navigate } from "react-router-dom";
import ItemDetail from "../page/ItemDetail";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate ? <ItemDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;

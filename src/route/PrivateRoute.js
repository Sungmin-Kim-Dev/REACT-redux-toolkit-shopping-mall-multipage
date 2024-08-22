/* eslint-disable react/prop-types */
import React from "react";
import { Navigate } from "react-router-dom";
import ItemDetail from "../page/ItemDetail";

const PrivateRoute = ({ authenticate }) => {
  return authenticate ? <ItemDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;

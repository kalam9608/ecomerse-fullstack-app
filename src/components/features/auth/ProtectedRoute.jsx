import React from "react";
import { useSelector } from "react-redux";
import { selectedUser } from "./authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectedUser);
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default ProtectedRoute;

import React from "react";
import { useSelector } from "react-redux";
import { selectedUser } from "./authSlice";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const user = useSelector(selectedUser);
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  if (user && user.role !== "admin") {
    return <Navigate to="/"></Navigate>;
  }
  return children;
};

export default AdminProtectedRoute;

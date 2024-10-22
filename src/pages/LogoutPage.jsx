import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAsync, selectedUser } from "../components/features/auth/authSlice";

const LogoutPage = () => {
  const user = useSelector(selectedUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutUserAsync());
  }, [dispatch]);

  return <div>{!user && <Navigate to="/login" replace={true}></Navigate>}</div>;
};

export default LogoutPage;

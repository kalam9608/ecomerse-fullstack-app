import React from "react";
import NavBar from "../components/header/NavBar";
import UserOrder from "../components/features/user/components/UserOrder";

const MyOrderPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <UserOrder />
    </>
  );
};

export default MyOrderPage;

import React from "react";
import UserProfile from "../components/features/user/components/userProfile";
import NavBar from "../components/header/NavBar";

const MyProfilePage = () => {
  return (
    <div>
      <NavBar />
      <UserProfile />
    </div>
  );
};

export default MyProfilePage;

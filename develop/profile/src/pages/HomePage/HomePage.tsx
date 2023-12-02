import React from "react";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
import ProfileTechnology from "./components/ProfileTechnology/ProfileTechnology";
import ProfileUserInfo from "./components/ProfileUserInfo/ProfileUserInfo";
import ProfileIntroduction from "./components/ProfileIntroduction/ProfileIntroduction";

const HomePage = () => {
  return (
    <div className="Container">
      <ProfileHeader />
      <ProfileUserInfo />
      <ProfileIntroduction />
      <ProfileTechnology />
    </div>
  );
};

export default HomePage;


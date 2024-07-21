import React from "react";
import ProfileComponent from "../components/ProfileComponent";
import ProfileDescription from "../components/ProfileDescription";
import ProfileFriendsField from "../components/ProfileFriendsField";
import ProfileAchievments from "../components/ProfileAchievments";

const ProfilePage = () => {
  return (
    <div className="bg-zinc-500 h-[calc(100vh-96px)] w-full grid grid-rows-5 grid-cols-10">
      <div className="col-span-2 row-span-3 p-3 col-start-3 ">
        <ProfileComponent />
      </div>
      <div className="col-span-4 row-span-2 p-3">
        <ProfileDescription />
      </div>
      <div className="col-span-4 row-span-1 p-3">
        <ProfileFriendsField />
      </div>
      <div className="row-span-2 col-span-6 col-start-3 p-3">
        <ProfileAchievments />
      </div>
    </div>
  );
};

export default ProfilePage;

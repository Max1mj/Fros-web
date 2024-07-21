import React, { FC } from "react";
import Cosmo from '../assets/Cosmo.png'
import ProfileProgress from "./ProfileProgress";

const ProfileComponent: FC = () => {
  return (
    <div className="bg-slate-500 w-full h-full border-4 flex flex-col justify-center items-center overflow-hidden gap-10">
      <div className=" size-32 ">
        <img src = {Cosmo} className="border-2 size-full rounded-full object-cover"/>
      </div>
      <div className="">
        <p className="text-center text-3xl text-white">Jalkhet</p>
      </div>
      <div className="">
        <ProfileProgress/>
      </div>
    </div>
  );
};

export default ProfileComponent;

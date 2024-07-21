import React, { FC, useState } from "react";
import "../styles/Progress.css";

const ProfileProgress: FC = ({}) => {
  return (
      <div className="flex flex-col">
          <div className="">
              <span>45</span>
              <span>/</span>
              <span>250</span>
          </div>
      <div className="flex flex-row items-center justify-center relative w-52">
        <progress max="250" value="45" className="h-2 w-full"></progress>
        <div className="absolute left-1/2 transform -translate-x-1/2  rotate-45 size-8  border bg-[#636060] flex justify-center items-center">
          <div className="rotate-[-45deg]">0</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileProgress;

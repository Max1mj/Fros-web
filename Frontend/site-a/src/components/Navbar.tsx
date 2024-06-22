import React from "react";
import { IoMdPlay } from "react-icons/io";
import PageText from "./PageText";
import LogInButton from "./LogInButton";
import Sidebar from "./Sidebar";
import Playbutton from "./Playbutton";

const Navbar = () => {
  return (
    <div className="bg-[#181E27] flex items-center justify-between">
      {/* Left */}
      {/* Sidebar and Playbutton */}
      <div className="flex flex-row gap-2">
        <Sidebar />
        <Playbutton/>
      </div>

      {/* Middle */}
      <div className=" flex align-middle">
        <PageText />
      </div>
      {/* Right */}
      <div className="">
        <LogInButton />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { GiWhiteBook } from "react-icons/gi";

const Sidebar = () => {
  return (
    <button className="text-white flex flex-col justify-center items-center p-3">
      <GiWhiteBook className="text-white w-12 h-12" />
      <p>Navigation</p>
    </button>
  );
};

export default Sidebar;

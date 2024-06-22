import React from "react";
import { IoMdPlay } from "react-icons/io";
const Playbutton = () => {
  return (
    <button className="text-white flex flex-col justify-center items-center p-3">
      <IoMdPlay className="w-12 h-12 text-white" />
      <p>Play</p>
    </button>
  );
};

export default Playbutton;

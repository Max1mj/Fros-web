import React, { useState } from "react";
import { IoMdPlay } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Playbutton = () => {
  const [activated, setActivated] = useState(false);
  const navigate = useNavigate()

  const clickHandler = () => {
    console.log("Clicked");
    setActivated(!activated);
    navigate("/games");
  };
  return (
    <button
      onClick={clickHandler}
      className="flex flex-col justify-center items-center p-3"
    >
      <div className={`${activated ? "text-orange-600": "text-white"}`}>
        <IoMdPlay className="w-12 h-12 " />
        <p>Play</p>
      </div>
    </button>
  );
};

export default Playbutton;
// need to add feature if button pressed you can`t press it again

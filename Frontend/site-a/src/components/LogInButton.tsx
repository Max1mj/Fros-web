import React from "react";
import { GiElfHelmet } from "react-icons/gi";

const LogInButton = () => {
  return (
    <button className="w-20 h-14 text-white flex justify-center items-center space-x-1 mr-7">
      <GiElfHelmet className="w-8 h-8" />
      <p>Log In</p>
    </button>
  );
};

export default LogInButton;
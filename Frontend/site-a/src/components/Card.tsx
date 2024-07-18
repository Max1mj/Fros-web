import React from "react";
import cosmo from "../assets/Cosmo.png";

const Card = () => {
  return (
    <div className=" max-w-56 h-72 overflow-hidden rounded-2xl shadow-lg ">
      <img src={cosmo} className="object-contain" />
    </div>
  );
};

export default Card;

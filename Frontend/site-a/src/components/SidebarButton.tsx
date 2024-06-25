import React, { useEffect, useState } from "react";
import { GiWhiteBook, GiSpellBook } from "react-icons/gi";
import { SidebarProps } from "../types/SidebarProps";

const SidebarButton:React.FC<Pick<SidebarProps, 'openedSidebar' | 'toggleSidebar'>> = ({ toggleSidebar, openedSidebar }) => {
  const Icon = openedSidebar ? GiSpellBook : GiWhiteBook;

  

  return (
    <button
      onClick={toggleSidebar}
      className={`${
        openedSidebar ? "text-orange-300" : "text-white"
      } flex flex-col justify-center items-center p-3`}
    >
      <Icon className="w-12 h-12" />
      <p>Navigation</p>
    </button>
  );
};

export default SidebarButton;

import React, { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import { SidebarProps } from "../types/SidebarProps";

type SideBarData = {
  title: string;
};

const SideData: SideBarData[] = [
  {
    title: "Home",
  },
  {
    title: "Profile",
  },
];

const SidebarContent:React.FC<SidebarProps> = ({ toggleSidebar, openedSidebar, sideRef }) => {
 
  return (
    <aside ref={sideRef} className={`${openedSidebar ? "flex flex-col pb-4 bg-gradient-to-tr from-[#101A21] to-[#3A4F5D] w-1/4 flex-1 overflow-y-auto h-dvh fixed mt-24" : "hidden"}`}><button>
      {SideData.map((item) => (
        <div className="text-white border h-24 m-2 border-amber-500 flex p-1 items-center">
          <div className="flex flex-col text-center">
            <div className="w-14 h-14 border rounded-full flex justify-center items-center">
              <IoHome className="w-8 h-8" />
            </div>
            {item.title}
          </div>
        </div>
      ))}
    </button>
      

    </aside>
  );
};

export default SidebarContent;

import React, { useState } from "react";
import { SidebarProps } from "../types/SidebarProps";
import { authRoutes } from "../routes";

const SidebarContent: React.FC<SidebarProps> = ({ openedSidebar, sideRef }) => {
  return (
    <aside
      ref={sideRef}
      className={`${
        openedSidebar
          ? "flex flex-col pb-4 bg-gradient-to-tr from-[#101A21] to-[#3A4F5D] w-1/4 flex-1 overflow-y-auto h-dvh fixed mt-24"
          : "hidden"
      }`}
    >
      {authRoutes.map((item, key) => (
        <button
          key={key}
          onClick={() => {
            window.location.pathname = item.path;
          }}
        >
          <div className="text-white border h-24 m-2 border-amber-500 flex p-2 items-center">
            <div className="flex flex-col text-center">
              <div className="w-14 h-14 border rounded-full flex justify-center items-center">
                <span className="text-3xl font-semibold">{item.icon}</span>
              </div>
              {item.title}
            </div>
          </div>
        </button>
      ))}
    </aside>
  );
};

export default SidebarContent;
//need to add public routes!

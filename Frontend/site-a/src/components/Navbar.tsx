import React, { useEffect, useRef, useState } from "react";
import PageText from "./PageText";
import LogInButton from "./LogInButton";
import SidebarButton from "./SidebarButton";
import Playbutton from "./Playbutton";
import SidebarContent from "./SidebarContent";

const Navbar = () => {
  const [openedSidebar, setOpenedSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenedSidebar(!openedSidebar);
  };

  const sideRef = useRef<HTMLDivElement>(null);
//   bug if click nearby to button to close(after closing automatically opens)
  useEffect(() => {
    const onCLick = (e: MouseEvent) => {
      if (sideRef.current == null) return;

      if (!sideRef.current.contains(e.target as Node)) {
        setOpenedSidebar(false);
      }
    };

    document.addEventListener("mousedown", onCLick)
    return () => {
        document.removeEventListener("mousedown", onCLick)
    }
  }, []);

  return (
    <div className="bg-[#181E27] flex items-center justify-between flex-1 h-24">
      {/* Left */}
      {/* Sidebar and Playbutton */}
      <div className="flex flex-col">
        <div className="flex flex-row gap-2">
          <SidebarButton
            toggleSidebar={toggleSidebar}
            openedSidebar={openedSidebar}
          />
          <Playbutton />
        </div>
        <SidebarContent
          openedSidebar={openedSidebar}
          toggleSidebar={toggleSidebar}
          sideRef={sideRef}
        />
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

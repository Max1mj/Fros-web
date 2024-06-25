export type SidebarProps = {
    toggleSidebar: () => void;
    openedSidebar: boolean;
    sideRef: React.RefObject<HTMLDivElement>;
  };
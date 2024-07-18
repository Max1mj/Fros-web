import { IoHome } from "react-icons/io5";
import GameCollectionPage from "./components/GameCollectionPage";
import Achievements from "./pages/Achievements";

import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import SettingsPage from "./pages/SettingsPage";
import {
  ACHIEVEMENTS_ROUTE,
  GAME_COLLECTION_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
  SETTINGS_ROUTE,
  SITE_ROUTE,
} from "./utils/consts";
import { CgProfile } from "react-icons/cg";
import { FaTrophy } from "react-icons/fa6";
import { SlSettings } from "react-icons/sl";
import { SiLegacygames } from "react-icons/si";
import MainPage from "./pages/MainPage";

type SideBarData = {
  title: string;
  icon: React.ReactNode;
  path: string;
  Component: React.ComponentType<any>
};

export const authRoutes: SideBarData[] = [
  {
    path: SITE_ROUTE,
    Component: MainPage,
    title: "Main",
    icon: <IoHome />,
  },
  {
    path: PROFILE_ROUTE,
    Component: ProfilePage,
    title: "Profile",
    icon: <CgProfile />,
  },
  {
    path: ACHIEVEMENTS_ROUTE,
    Component: Achievements,
    title: "Achievements",
    icon: <FaTrophy />
  },
  {
    path: SETTINGS_ROUTE,
    Component: SettingsPage,
    title: "Settings",
    icon: <SlSettings />
  },
  {
    path: GAME_COLLECTION_ROUTE,
    Component: GameCollectionPage,
    title: "Games",
    icon: <SiLegacygames/>
  },
];

export const publicRoutes = [
  {
    path: SITE_ROUTE,
    Component: MainPage,
    title: "Main",
  },
  {
    path: REGISTRATION_ROUTE,
    Component: RegistrationPage,
    title: "Register",
  },
  {
    path: GAME_COLLECTION_ROUTE,
    Component: GameCollectionPage,
    title: "Games",
  },
];

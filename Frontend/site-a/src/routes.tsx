import GameCollectionPage from "./components/GameCollectionPage";
import Achievements from "./pages/Achievements";
import HomePage from "./pages/HomePage";
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

export const authRoutes = [
  {
    path: SITE_ROUTE,
    Component: HomePage,
    title: "Home",
  },
  {
    path: PROFILE_ROUTE,
    Component: ProfilePage,
    title: "Profile",
  },
  {
    path: ACHIEVEMENTS_ROUTE,
    Component: Achievements,
    title: "Achievements",
  },
  {
    path: SETTINGS_ROUTE,
    Component: SettingsPage,
    title: "Settings",
  },
  {
    path: GAME_COLLECTION_ROUTE,
    Component: GameCollectionPage,
    title: "Games",
  },
];

export const publicRoutes = [
  {
    path: SITE_ROUTE,
    Component: HomePage,
    title: "Home",
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

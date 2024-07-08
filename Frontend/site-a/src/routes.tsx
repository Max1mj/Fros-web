import Achievements from "./pages/Achievements"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import RegistrationPage from "./pages/RegistrationPage"
import {ACHIEVEMENTS_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SITE_ROUTE} from "./utils/consts"

export const authRoutes = [
    {
        path: SITE_ROUTE,
        Component: HomePage,
        title: "Home"
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage,
        title: "Profile"
    },
    {
        path: ACHIEVEMENTS_ROUTE,
        Component: Achievements,
        title: "Achievements"
    },

]

export const publicRoutes = [
    {
        path: SITE_ROUTE,
        Component: HomePage,
        title: "Home"
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegistrationPage,
        title: "Register"
    }
]
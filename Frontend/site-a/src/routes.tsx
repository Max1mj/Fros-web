import Achievements from "./pages/Achievements"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import RegistrationPage from "./pages/RegistrationPage"
import {ACHIEVEMENTS_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SITE_ROUTE} from "./utils/consts"

export const authRoutes = [
    {
        path: SITE_ROUTE,
        Component: HomePage
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    },
    {
        path: ACHIEVEMENTS_ROUTE,
        Component: Achievements
    },

]

export const publicRoutes = [
    {
        path: SITE_ROUTE,
        Component: HomePage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegistrationPage
    }
]
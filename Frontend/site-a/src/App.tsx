import React from "react";
import Navbar from "./components/Navbar";
import SidebarContent from "./components/SidebarContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="Home" element={<HomePage/>}/>
        <Route path="Profile" element={<ProfilePage/>}/>
        <Route path="Settings" element={<SettingsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

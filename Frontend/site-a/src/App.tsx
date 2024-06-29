import React from "react";
import Navbar from "./components/Navbar";
import SidebarContent from "./components/SidebarContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App;

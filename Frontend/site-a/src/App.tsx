import React, { createContext, FC } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppRouter from "./components/AppRouter";

const Auth = true
export const AuthContext = createContext(Auth);

const App = () => {
  return (
    <BrowserRouter>
      <AuthContext.Provider value={Auth}>
        <Navbar />
        <AppRouter />
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;

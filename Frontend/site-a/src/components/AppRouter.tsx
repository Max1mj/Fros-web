import React, { createContext, FC, useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SITE_ROUTE } from "../utils/consts";
import { AuthContext } from "../App";


const AppRouter: FC = () => {
  const isAuth = useContext(AuthContext)
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={SITE_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter ;

//need to think about logging logic!

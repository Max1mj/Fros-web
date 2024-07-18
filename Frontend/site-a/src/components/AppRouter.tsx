import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SITE_ROUTE } from '../utils/consts'

const AppRouter = () => {
    const isAuth = true
  return (
    <Routes>
        {isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>} />
        )}
        {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>} />
        )}
         <Route path="*" element={<Navigate to={SITE_ROUTE} replace />} />
    </Routes>
  )
}

export default AppRouter

//need to think about logging logic!
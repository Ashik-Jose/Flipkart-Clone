import React from 'react';
import { Route,Navigate, Outlet } from 'react-router-dom';
import Home from '../containers/Home';

const PrivateRoutes = () => {
   const token = window.localStorage.getItem('token');

   return token ? <Outlet/>: <Navigate to='/signIn'/>
}

export default PrivateRoutes;
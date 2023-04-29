import React from 'react';
import { useLocation } from 'react-router-dom';
import { LOCAL } from '../../utils/routes';
import AppNavigation from './AppNavigation';
import NavbarHome from './NavbarHome';

const Navbar = () => {
  const route = useLocation();

  return <>{route.pathname === LOCAL.EXPLORE ? <NavbarHome /> : <AppNavigation />}</>;
};

export default Navbar;

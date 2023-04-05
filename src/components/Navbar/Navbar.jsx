import React from 'react';
import { useLocation } from 'react-router-dom';
import AppNavigation from './AppNavigation';
import NavbarHome from './NavbarHome';

const Navbar = () => {
  const route = useLocation();

  return <>{route.pathname === '/' ? <NavbarHome /> : <AppNavigation />}</>;
};

export default Navbar;

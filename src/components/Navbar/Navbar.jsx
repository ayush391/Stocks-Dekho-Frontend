import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppNavigation from './AppNavigation';
import NavbarHome from './NavbarHome';

const Navbar = ({theme , setTheme}) => {
  const route = useLocation();
  const [currentRoute, setCurrentRoute] = useState(route);
  
  useEffect(() =>{},[]);
  return <>{route.pathname === '/' ? <NavbarHome theme={theme} setTheme={setTheme} /> : <AppNavigation />}</>;
};

export default Navbar;

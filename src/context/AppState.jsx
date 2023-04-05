import React, { useState } from 'react';
import AppContext from './AppContext';

const AppState = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  return <AppContext.Provider value={{ themeMode, setThemeMode }}>{children}</AppContext.Provider>;
};

export default AppState;

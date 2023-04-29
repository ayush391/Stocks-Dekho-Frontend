import { createContext, useContext, useState } from 'react';
import createThemeWithMode from '../theme';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';

const ThemeContext = createContext();

export const AppThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const appTheme = createThemeWithMode(darkMode);
  const theme = responsiveFontSizes(createTheme(appTheme));

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

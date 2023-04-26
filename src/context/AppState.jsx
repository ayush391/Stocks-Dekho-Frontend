import { getAuth } from 'firebase/auth';
import { createContext, useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { app } from '../components/Firebase';

const AppContext = createContext();

export const AppState = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  const stateValue = {
    themeMode,
    setThemeMode,
    auth,
    user
  };

  return <AppContext.Provider value={stateValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

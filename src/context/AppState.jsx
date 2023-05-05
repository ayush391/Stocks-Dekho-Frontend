import { getAuth } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { app } from '../components/Firebase';

const AppContext = createContext();

export const AppState = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authListener = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => authListener();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  const stateValue = { auth, user };

  return <AppContext.Provider value={stateValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

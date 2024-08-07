import { useEffect, useState } from 'react';
import { AuthContext } from '.';
import { me } from '@/data';

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkSession, setCheckSession] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await me();
        setUser(user);
        setIsAuthenticated(true);
      } catch (error) {
        console.error(error);
      } finally {
        setCheckSession(false);
      }
    };
    checkSession && getUser();
  }, [checkSession]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        setIsAuthenticated,
        setCheckSession
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

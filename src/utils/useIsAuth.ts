import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

type JwtToken = string | null | undefined;

const useIsAuth = (): boolean => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token: JwtToken = Cookies.get('token');
    console.log("token:",token)
      if (token) {
        //więcej logiki dodać tutaj potem
        console.log("token true")
        setIsAuthenticated(true);
      } else {
        console.log("token false")

        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  return isAuthenticated;
};

export default useIsAuth;

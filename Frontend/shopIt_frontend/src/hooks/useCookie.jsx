import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const useCookie = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (!token) {
      return;
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  return isLoggedIn;
};

export default useCookie;

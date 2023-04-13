import { useLocation, useNavigate } from "react-router-dom";
import { getAccessToken } from "../util/token";
import { useEffect } from "react";

export const useTokenCheck = () => {
  const location = useLocation();
  const isLogin = getAccessToken();
  const nav = useNavigate();

  useEffect(() => {
    if (location.pathname === "/todo" && !isLogin) {
      nav("/signin");
    } else if (location.pathname !== "/todo" && isLogin) {
      nav("/todo");
    }
  }, [isLogin, nav, location]);

  return isLogin;
};

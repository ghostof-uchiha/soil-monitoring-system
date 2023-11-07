import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(-1, -1);console.log("helo")
  }, [pathname]);

  return null;
};

export default ScrollToTop;
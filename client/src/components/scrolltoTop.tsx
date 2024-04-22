import { useEffect } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  useEffect(()=>{
    
    const token = localStorage.getItem('userdata');
    if (!token){
      navigate("/auth/signup")
    }
  },[])

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("runnig");
    
  }, [pathname]);

  return null;
};

export default ScrollToTop;
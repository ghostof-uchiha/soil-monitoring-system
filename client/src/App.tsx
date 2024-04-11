import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import ScrollToTop from './components/scrolltoTop';

import Home from './pages/Home';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import NotFound from './pages/404/NotFound';
import Loader from './common/Loader';
import routes from './routes';
import VerifyForOtp from './pages/Authentication/VerifyForOtp';
import axios from 'axios';
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;


const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));


function App() {
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const url = `http://localhost:4000/g/login/success`;
      const { data } = await axios.get(url, { 
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'API-Key': apiKey,
        },
      });
      // console.log((data.user));
      
      localStorage.setItem('userdata', JSON.stringify(data.user)); // Store the token in localStorage
      localStorage.setItem('token', data.token); // Store the token in localStorage
      navigate("/ml")

      
    } catch (err) {
      console.log(err);
    }
    setLoading(false);

  };

  
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);
  
  
  useEffect(() => {
    const storedUserData = localStorage.getItem('userdata');
    if (storedUserData) {
      // If user data is available in local storage, set loading to false
      setLoading(false);
    } else {
      // If no user data is available, make the API call to get user data
      getUser();
    }
  }, []);

  const userdataString = localStorage.getItem('userdata');
  const userdata = userdataString ? JSON.parse(userdataString) : null;
  
  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />

      <ScrollToTop />
      <Routes>
          <Route path="/auth/signin" element={userdata? <Home />: <SignIn setToken={setToken}/>} />
          <Route path="/auth/signup" element={userdata? <Home />:<SignUp />} />
          <Route path="/auth/verifyotp" element={userdata? <Home />:<VerifyForOtp />} />
          <Route path="*" element={<NotFound />} />


        <Route element={userdata? <DefaultLayout />:<Home />}>
          <Route index element={<Home />} />
          {routes.map((route, index) => {
            const { path, component: Component } = route;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;

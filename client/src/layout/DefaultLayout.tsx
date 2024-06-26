import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet  } from 'react-router-dom';
import ScrollToTop from '.././components/scrolltoTop';
import Home from '../pages/Home';
// its only starting layout we have to make another one once again .

const DefaultLayout = () => {
  <ScrollToTop />
  

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isHomePage = window.location.pathname === '/';
  return (
    <>
      {isHomePage ? (
        <Home />
      ) : (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {/* <!-- ===== Page Wrapper Start ===== --> */}
          <div className="flex h-screen overflow-hidden">
            {/* <!-- ===== Sidebar Start ===== --> */}
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            {/* <!-- ===== Sidebar End ===== --> */}

            {/* <!-- ===== Content Area Start ===== --> */}
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              {/* <!-- ===== Header Start ===== --> */}
              <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              {/* <!-- ===== Header End ===== --> */}

              {/* <!-- ===== Main Content Start ===== --> */}
              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  <Outlet />
                </div>
              </main>
              {/* <!-- ===== Main Content End ===== --> */}
            </div>
            {/* <!-- ===== Content Area End ===== --> */}
          </div>
          {/* <!-- ===== Page Wrapper End ===== --> */}
        </div>
      )}
    </>
  );
};

export default DefaultLayout;

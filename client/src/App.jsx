import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import RegistrationForm from "./components/RegistrationForm";
import { SideBar } from "./components/SideBar";
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <div className="flex w-full">
      <SideBar/>

      <div className="w-full">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route index element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/register" element={<RegistrationForm/>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;

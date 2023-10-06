import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import LoginForm from "./components/Login";
import RegistrationForm from "./components/RegistrationForm";
import { SideBar } from "./components/SideBar";
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <div className="flex w-full gap-2">
      <SideBar/>

      <div className="w-full h-full flex flex-col justify-center items-center">
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route index element={<HomePage/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<RegistrationForm/>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;

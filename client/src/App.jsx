import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';

import Header from "./components/common/Header";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* Add the element prop */}
        <Route path="/registration" element={<Register />} />
        <Route path="*" element={<NotFound />} /> {/* Use path="*" for NotFound route */}
      </Routes>
    </div>
  );
}

export default App;

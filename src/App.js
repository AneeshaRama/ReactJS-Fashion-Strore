import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;

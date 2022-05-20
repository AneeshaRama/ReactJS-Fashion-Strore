import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Mens from "./pages/Products/Mens";
import Womens from "./pages/Products/Womens";
import Hats from "./pages/Products/Hats";
import Sneackers from "./pages/Products/Sneackers";
import Jackets from "./pages/Products/Jackets";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Router>
          <SnackbarProvider
            TransitionComponent={Slide}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Navbar />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/explore" element={<Categories />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="/shop/mens" element={<Mens />} />
              <Route exact path="/shop/womens" element={<Womens />} />
              <Route exact path="/shop/hats" element={<Hats />} />
              <Route exact path="/shop/jackets" element={<Jackets />} />
              <Route exact path="/shop/sneakers" element={<Sneackers />} />
            </Routes>
          </SnackbarProvider>
        </Router>
        <Footer />
      </div>
    </>
  );
};

export default App;

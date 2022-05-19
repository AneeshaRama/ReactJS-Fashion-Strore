import React, { useState } from "react";
import { Home, Menu, ShoppingBasket } from "@mui/icons-material";
import { Drawer, useTheme, useMediaQuery, Badge, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <nav className="flex items-center justify-between h-20  max-w-6xl mx-auto">
        <div className="ml-5">
          <Link to={"/"}>
            <h1 className="bg-gradient-to-br from-pink-800 to-pink-400 bg-clip-text text-transparent text-5xl font-bold logo cursor-pointer tracking-wider">
              Orchid
            </h1>
          </Link>
        </div>
        <div className="flex list-none items-center space-x-6 mr-5 text-gray-700 -tracking-tighterr font-semibold">
          {isMatch ? (
            <>
              <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                anchor="top"
              >
                <div className="bg-pink-50 flex flex-col items-center">
                  <Link to={"/"}>
                    <div
                      onClick={() => setOpenDrawer(false)}
                      className="flex items-center mt-10 space-x-10 text-gray-700"
                    >
                      <div>
                        <Home />
                      </div>
                      <h3 className="font-semibold">Home</h3>
                    </div>
                  </Link>
                  <Link to={"/login"}>
                    <div
                      onClick={() => setOpenDrawer(false)}
                      className="flex items-center mt-10 mb-5 space-x-5 text-gray-700"
                    >
                      <div>
                        <Avatar>A</Avatar>
                      </div>
                      <h3 className="font-semibold">Login</h3>
                    </div>
                  </Link>
                </div>
              </Drawer>
            </>
          ) : (
            <>
              <Link to="/">
                <li className="cursor-pointer hover:text-pink-600 transition transform duration-200">
                  Home
                </li>
              </Link>
              <Link to="/login">
                <li className="cursor-pointer hover:text-pink-600 transition transform duration-200">
                  Login
                </li>
              </Link>
            </>
          )}

          <Link to={"/cart"}>
            <div className="relative">
              <ShoppingBasket className="text-2xl cursor-pointer hover:text-pink-600 transition transform duration-200" />
              <div className="absolute bg-pink-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                0
              </div>
            </div>
          </Link>

          {isMatch && (
            <Menu
              className="text-3xl text-gray-700"
              onClick={() => setOpenDrawer(!openDrawer)}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

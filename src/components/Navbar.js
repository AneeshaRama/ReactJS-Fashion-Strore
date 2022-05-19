import React, { useState } from "react";
import { Home, Explore, Menu, ShoppingBasket } from "@mui/icons-material";
import { Drawer, useTheme, useMediaQuery, Badge, Avatar } from "@mui/material";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <nav className="flex items-center justify-between h-20  max-w-6xl mx-auto">
        <div className="ml-5">
          <h1 className="text-5xl font-bold logo text-pink-700 cursor-pointer tracking-wider">
            Orchid
          </h1>
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
                  <div className="flex items-center mt-10 space-x-10 text-gray-700">
                    <div>
                      <Home />
                    </div>
                    <h3 className="font-semibold">Home</h3>
                  </div>
                  <div className="flex items-center mt-10 mb-5 space-x-5 text-gray-700">
                    <div>
                      <Avatar>A</Avatar>
                    </div>
                    <h3 className="font-semibold">Login</h3>
                  </div>
                </div>
              </Drawer>
            </>
          ) : (
            <>
              <li className="cursor-pointer ">Home</li>
              <li className="cursor-pointer ">Login</li>
            </>
          )}
          <Badge badgeContent={2} color="secondary">
            <ShoppingBasket className="text-2xl cursor-pointer" />
          </Badge>
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

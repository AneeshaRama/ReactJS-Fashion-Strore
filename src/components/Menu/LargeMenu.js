import React from "react";

const LargeMenu = ({ item }) => {
  return (
    <>
      <div className="h-[18rem]  relative  hover:scale-105 transition transform duration-700 ease-in">
        <img src={item.image} className="w-full h-full object-cover" alt="" />
        <div className="border-2 p-3 opacity-60 rounded-xl text-center bg-white absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 cursor-pointer hover:scale-75 transition transform duration-500 ease-in">
          <h1 className="text-xl mb-2 font-semibold">{item.title}</h1>
          <p>SHOP NOW</p>
        </div>
      </div>
    </>
  );
};

export default LargeMenu;

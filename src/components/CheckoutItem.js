import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/cartContext";

const CheckoutItem = ({ item }) => {
  return (
    <>
      <div className="flex items-center p-5 justify-between bg-red-200 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img src={item.imageUrl} className="h-28 rounded-lg" alt="" />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-pink-700 font-semibold">{item.name}</h1>
            <p>${item.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;

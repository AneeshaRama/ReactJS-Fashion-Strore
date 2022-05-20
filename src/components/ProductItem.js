import React from "react";

const ProductItem = ({ item }) => {
  return (
    <>
      <div className="mt-5 single flex flex-col mx-auto w-[275px] sm:w-60 border-2 border-pink-500 shadow-xl hover:shadow-gray-400  rounded-xl hover:scale-110 transition-transform duration-500 ease-in group">
        <div>
          <img
            src={item.imageUrl}
            className="h-64 w-full object-fill rounded-t-lg"
            alt=""
          />
        </div>
        <div className="flex justify-center mt-3">
          <h1 className="font-bold text-lg text-gray-700">{item.name}</h1>
        </div>
        <div className="flex justify-between items-center p-3">
          <button className="text-pink-700 font-semibold text-sm border-2 border-pink-700 p-2 rounded-lg  group-hover:bg-pink-700 group-hover:text-white transition-transform duration-300 ease-in-out group-hover:border-white">
            AddtoCart
          </button>
          <p className="text-gray-700">${item.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductItem;

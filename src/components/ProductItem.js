import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useSnackbar } from "notistack";

const ProductItem = ({ item }) => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useContext(CartContext);
  const { enqueueSnackbar } = useSnackbar();

  const addToCart = () => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
    enqueueSnackbar(`Added ${item.name} to your cart`, {
      variant: "success",
      autoHideDuration: 3000,
    });
  };

  const removeItemFromCart = () => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
    enqueueSnackbar(`Removed ${item.name} from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  return (
    <>
      <div className="mt-5 single flex flex-col mx-auto w-[275px] sm:w-60  shadow-xl hover:shadow-gray-400  rounded-xl hover:scale-110 transition-transform duration-500 ease-in group">
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
          {cart.some((p) => p.id === item.id) ? (
            <>
              <button
                className=" font-semibold text-sm border-2 border-pink-700 p-2 rounded-lg  hover:bg-pink-50 bg-pink-700 hover:text-pink-700 text-white transition-transform duration-300 ease-in-out hover:border-pink-700"
                onClick={removeItemFromCart}
              >
                Remove Item
              </button>
            </>
          ) : (
            <>
              <button
                className="text-pink-700 font-semibold text-sm border-2 border-pink-700 p-2 rounded-lg  group-hover:bg-pink-700 group-hover:text-white transition-transform duration-300 ease-in-out group-hover:border-white"
                onClick={addToCart}
              >
                AddtoCart
              </button>
            </>
          )}

          <p className="text-gray-700">${item.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductItem;

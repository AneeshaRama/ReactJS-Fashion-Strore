import React, { useContext } from "react";
import { Delete } from "@mui/icons-material";
import { CartContext } from "../context/cartContext";
import { useSnackbar } from "notistack";

const CartItem = ({ item }) => {
  const { cartDispatch } = useContext(CartContext);
  const { enqueueSnackbar } = useSnackbar();

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
      <div className="flex items-center p-5 justify-between bg-red-200 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img src={item.imageUrl} className="h-28 rounded-lg" alt="" />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-pink-700 font-semibold">{item.name}</h1>
            <p>${item.price}</p>
          </div>
        </div>
        <div
          onClick={removeItemFromCart}
          className="bg-pink-300 hover:bg-pink-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
        >
          <Delete className="text-gray-800" />
        </div>
      </div>
    </>
  );
};

export default CartItem;

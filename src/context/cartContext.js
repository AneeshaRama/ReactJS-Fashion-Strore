import { createContext, useReducer } from "react";
import { products } from "../data";

const initialData = {
  products,
  cart: [],
};

export const CartContext = createContext();

const cartReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialData);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

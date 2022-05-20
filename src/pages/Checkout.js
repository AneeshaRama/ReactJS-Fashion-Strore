import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import CheckoutItem from "../components/CheckoutItem";

const Checkout = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const {
    cartState: { cart },
  } = useContext(CartContext);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  const {
    state: { user },
  } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <div className="min-h-[80vh] grid md:grid-cols-2">
        <div className="flex flex-col justify-center items-between p-2">
          {cart.map((item) => {
            return <CheckoutItem key={item.id} item={item} />;
          })}
        </div>
        <div>
          <div className="flex flex-col justify-center items-center md:ml-20 p-5 space-y-5 mt-14">
            <h1 className="font-semibold text-xl text-pink-800 ">DETAILS </h1>
            <p>
              <span className="text-gray-700 font-semibold">Total Items</span> :{" "}
              {cart.length}
            </p>
            <p>
              {" "}
              <span className="text-gray-700 font-semibold">
                Total Amount
              </span>{" "}
              : ${totalAmount}
            </p>

            <div>
              <form className="flex flex-col space-y-3">
                <input
                  className="p-2 border-b-2 border-pink-500 bg-transparent outline-none placeholder:text-xs placeholder:text-center w-52 text-sm mt-3"
                  type="text"
                  placeholder="Your address"
                />
                <input
                  className="p-2 border-b-2 border-pink-500 bg-transparent outline-none placeholder:text-xs placeholder:text-center w-52 text-sm mt-3"
                  type="text"
                  placeholder="Your city"
                />
                <input
                  className="p-2 border-b-2 border-pink-500 bg-transparent outline-none placeholder:text-xs placeholder:text-center w-52 text-sm mt-3"
                  type="text"
                  placeholder="Zipcode"
                />

                <div className="flex justify-between items-center mt-5">
                  <div className="space-x-2">
                    <input type="radio" name="payment" />
                    <label>COD</label>
                  </div>
                  <div className="space-x-2">
                    <input type="radio" name="payment" />
                    <label>Card</label>
                  </div>
                </div>
              </form>
            </div>

            <button className="bg-pink-700 hover:bg-pink-50 rounded-lg text-white transition duration-300 ease-linear mt-10 border-2 border-pink-600 font-bold hover:text-pink-700 p-3 px-10">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

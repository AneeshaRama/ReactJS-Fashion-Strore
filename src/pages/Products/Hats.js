import React from "react";
import { products } from "../../data";
import ProductContainer from "../../components/ProductContainer";
import ProductItem from "../../components/ProductItem";
import { Link } from "react-router-dom";

const Hats = () => {
  return (
    <>
      <div className="hidden md:flex items-center justify-center space-x-10 font-semibold text-pink-600 mt-5">
        <Link to={"/shop/hats"}>Hats</Link>
        <Link to={"/shop/jackets"}>Jackets</Link>
        <Link to={"/shop/sneakers"}>Sneakers</Link>
        <Link to={"/shop/womens"}>Womens</Link>
        <Link to={"/shop/mens"}>Mens</Link>
      </div>
      <div className=" md:hidden flex items-center justify-center space-x-10 font-semibold text-pink-600 mt-5">
        <Link to={"/explore"}>All Categories</Link>
      </div>
      <ProductContainer>
        {products.hats.map((item) => {
          return <ProductItem key={item.id} item={item} />;
        })}
      </ProductContainer>
    </>
  );
};

export default Hats;

import React from "react";
import { products } from "../../data";
import ProductContainer from "../../components/ProductContainer";
import ProductItem from "../../components/ProductItem";

const Sneakers = () => {
  return (
    <>
      <ProductContainer>
        {products.sneakers.map((item) => {
          return <ProductItem key={item.id} item={item} />;
        })}
      </ProductContainer>
    </>
  );
};

export default Sneakers;

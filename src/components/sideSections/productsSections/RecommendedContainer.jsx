import React from "react";
import ProductCard from "./ProductCard";
import { ProductsDisplay } from "../../../pages/products/ProductsStyles";
import { useSelector } from "react-redux";

export default function RecommendedContainer() {
  const { recommended } = useSelector((state) => state.recommended);

  return (
    <>
      <ProductsDisplay>
        {recommended.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </ProductsDisplay>
    </>
  );
}

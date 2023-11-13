import React from "react";
import {
  ProductsContainerStyled,
  ProductsDisplay,
} from "../../../pages/products/ProductsStyles";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { SideBtn } from "../../UI/SideBtn";
import { useState } from "react";
import { useEffect } from "react";
import { SuccessModal } from "../../UI/Modal";

export default function ProductsContainer() {
  const { modal } = useSelector((state) => state.allCart);
  let { products } = useSelector((state) => state.products);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  if (selectedCategory) {
    products = products.filter(
      (product) => product.category === selectedCategory
    );
  }

  const INITIAL_LIMIT = 8;
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);

  return (
    <>
      <ProductsContainerStyled>
        <ProductsDisplay>
          {products.map((product, i) =>
            limit > i ? <ProductCard key={i} {...product} /> : null
          )}
        </ProductsDisplay>

        {!selectedCategory && (
          <SideBtn
            w="220px"
            hidden={products.length <= limit}
            onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)}
          >
            Ver más
          </SideBtn>
        )}
      </ProductsContainerStyled>
      <SuccessModal open={modal}>
        Producto añadido al carrito exitosamente
      </SuccessModal>
    </>
  );
}

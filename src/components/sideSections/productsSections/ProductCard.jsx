import React from "react";
import {
  ProductCardStyled,
  ProductData,
} from "../../../pages/products/ProductsStyles";
import { CartBtn } from "../../UI/CartBtn";
import { useDispatch } from "react-redux";
import { productModal, addToCart } from "../../../redux/cart/cartSlice";

export default function ProductCard(product) {
  const dispatch = useDispatch();
  const { name, price, img, id } = product;

  const handleAddProduct = () => {
    dispatch(addToCart(product));
    dispatch(productModal());
    setTimeout(() => {
      dispatch(productModal());
    }, 2000);
  };

  return (
    <>
      <ProductCardStyled key={id}>
        <img src={img} alt={name} />
        <ProductData>
          <span>{name}</span>
          <p>${price}</p>
          <CartBtn card={true} onClick={() => handleAddProduct()}>
            Añadir al carrito
          </CartBtn>
        </ProductData>
      </ProductCardStyled>
    </>
  );
}

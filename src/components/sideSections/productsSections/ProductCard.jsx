import React from "react";
import {
  ProductCardStyled,
  ProductData,
} from "../../../pages/products/ProductsStyles";
import { CartBtn } from "../../UI/CartBtn";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice";

export default function ProductCard(product) {
  const dispatch = useDispatch();
  const { name, price, img, id } = product;

  return (
    <>
      <ProductCardStyled key={id}>
        <img src={img} alt={name} />
        <ProductData>
          <span>{name}</span>
          <p>${price}</p>
          <CartBtn card={true} onClick={() => dispatch(addToCart(product))}>
            Añadir al carrito
          </CartBtn>
        </ProductData>
      </ProductCardStyled>
    </>
  );
}

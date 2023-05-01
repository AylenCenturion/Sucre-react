import React from "react";
import {
  ProductCardStyled,
  ProductData,
} from "../../../pages/products/ProductsStyles";
import { CartBtn } from "../../UI/CartBtn";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux/cart/cart";

export default function ProductCard({ name, price, img, id }) {
  const dispatch = useDispatch();

  return (
    <>
      <ProductCardStyled>
        <img src={img} alt={name} />
        <ProductData>
          <span>{name}</span>
          <p>${price}</p>
          <CartBtn
            card={true}
            onClick={() =>
              dispatch(cartActions.addToCart({ name, price, img, id }))
            }
          >
            Add to cart
          </CartBtn>
        </ProductData>
      </ProductCardStyled>
    </>
  );
}

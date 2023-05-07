import React from "react";
import {
  CartCardImg,
  CartCardStyled,
  CartProductData,
  QuantityHandler,
  QuantityRegulator,
} from "./userCardStyled";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/cart/cartSlice";

export default function UserCard(item) {
  const dispatch = useDispatch();
  const { name, price, img, quantity } = item;

  return (
    <>
      <CartCardStyled>
        <CartCardImg>
          <img src={img} alt={name} />
        </CartCardImg>

        <CartProductData>
          <p>{name}</p>
          <span>${price}</span>

          <QuantityRegulator>
            <QuantityHandler onClick={() => dispatch(removeFromCart(item))}>
              -
            </QuantityHandler>
            <p>{quantity}</p>
            <QuantityHandler onClick={() => dispatch(addToCart(item))}>
              +
            </QuantityHandler>
          </QuantityRegulator>
        </CartProductData>
      </CartCardStyled>
    </>
  );
}

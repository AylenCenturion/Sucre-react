import React from "react";
import {
  CartCardImg,
  CartCardStyled,
  CartProductData,
  QuantityHandler,
  QuantityRegulator,
} from "./CartCardStyled";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/cart/cartSlice";

export default function CartCard(item) {
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
        </CartProductData>

        <QuantityRegulator>
          <QuantityHandler
            // c={props.color}
            onClick={() => dispatch(removeFromCart(item))}
          >
            -
          </QuantityHandler>
          <p>{quantity}</p>
          <QuantityHandler
            // c={props.color}
            onClick={() => dispatch(addToCart(item))}
          >
            +
          </QuantityHandler>
        </QuantityRegulator>
      </CartCardStyled>
    </>
  );
}

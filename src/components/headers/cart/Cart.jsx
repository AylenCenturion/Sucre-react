import React from "react";
import {
  CartBottom,
  CartCount,
  CartDivider,
  CartTitle,
  DeliveryInfo,
  ShoppingList,
} from "./CartStyled";
import { CartBtn } from "../../UI/CartBtn";
import { useNavigate } from "react-router-dom";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";
import { cartActions } from "../../../redux/cart/cart";

export default function Cart(props) {
  const navigate = useNavigate();

  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  // const hiddenCart = useSelector((state) => state.cart.hidden);

  // const dispatch = useDispatch();

  // const totalPrice = cartItems.length
  //   ? cartItems.reduce((acc, item) => {
  //       acc += item.price * item.quantity;
  //     })
  //   : 0;

  return (
    <>
      <CartTitle>
        <h4>My products</h4>
      </CartTitle>

      <ShoppingList>
        {/* {cartItems.length ? (
          cartItems.map((item) => (
            <CartCard color={props.color} key={item.id} {...item} />
          ))
        ) : (
          <p>The cart is empty</p>
        )} */}
      </ShoppingList>

      <CartCount>
        <DeliveryInfo>
          <p>Subtotal:</p>
          {/* <p>${totalPrice}</p> */}
        </DeliveryInfo>
        <DeliveryInfo>
          <p>Delivery:</p>
          <p>${shippingCost}</p>
        </DeliveryInfo>
        <CartDivider />
        <DeliveryInfo>
          {/* <h3>Total:</h3>
          <span>${shippingCost + totalPrice} </span> */}
        </DeliveryInfo>
      </CartCount>

      <CartBottom>
        <CartBtn disabled={!cartItems.length} c={props.color}>
          BUY
        </CartBtn>
        <CartBtn
          c={props.color}
          disabled={!cartItems.length}
          onClick={() => cartActions.clearCart()}
        >
          DELETE CART
        </CartBtn>
        <p>
          <span onClick={() => navigate("/login")}>Log in</span> to shop
        </p>
      </CartBottom>
    </>
  );
}

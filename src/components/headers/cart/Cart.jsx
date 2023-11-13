import React, { useEffect } from "react";
import {
  CartBottom,
  CartCount,
  Divider,
  CartTitle,
  DeliveryInfo,
  ShoppingList,
} from "./CartStyled";
import { CartBtn } from "../../UI/CartBtn";
import { useNavigate } from "react-router-dom";
import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCartTotal } from "../../../redux/cart/cartSlice";
import { handleRedirection } from "../../../redux/navbar/navbarSlice";

export default function Cart(props) {
  const navigate = useNavigate();

  const { isAuth } = useSelector((state) => state.user);

  const { cart, totalPrice, shippingCost } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  });

  const handleBuyBtn = () => {
    if (!isAuth) {
      alert("Registrese para completar su compra");
      navigate("/signin");
      dispatch(handleRedirection());
    }
    navigate(`/usuario`);
    dispatch(handleRedirection());
  };

  const handleRegistration = () => {
    navigate("/signin");
    dispatch(handleRedirection());
  };

  return (
    <>
      <CartTitle>
        <h4>Mis productos</h4>
      </CartTitle>

      <ShoppingList>
        {cart.length ? (
          cart.map((item) => (
            <CartCard color={props.color} key={item.id} {...item} />
          ))
        ) : (
          <p>El carrito esta vacío</p>
        )}
      </ShoppingList>

      {cart.length ? (
        <CartCount>
          <DeliveryInfo>
            <p>Sub-total:</p>
            <p>${totalPrice}</p>
          </DeliveryInfo>
          <DeliveryInfo>
            <p>Delivery:</p>
            <p>${shippingCost}</p>
          </DeliveryInfo>
          <Divider />
          <DeliveryInfo>
            <h3>Total:</h3>
            <span>${shippingCost + totalPrice} </span>
          </DeliveryInfo>
        </CartCount>
      ) : (
        ""
      )}

      <CartBottom>
        <CartBtn
          disabled={!cart.length}
          c={props.color}
          onClick={() => handleBuyBtn()}
        >
          COMPRAR
        </CartBtn>
        <CartBtn
          c={props.color}
          disabled={!cart.length}
          onClick={() => dispatch(clearCart())}
        >
          BORRAR CARRITO
        </CartBtn>
        {!isAuth && (
          <p>
            <span onClick={() => handleRegistration()}>Registrate</span> para
            comprar
          </p>
        )}
      </CartBottom>
    </>
  );
}

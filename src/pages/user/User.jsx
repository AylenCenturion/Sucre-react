import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import SideHero from "../../components/heros/sideHero/SideHero";
import { logout } from "../../redux/user/user.Slice";
import { useDispatch, useSelector } from "react-redux";
import { BackSectionStyled } from "../../components/UI/BackSection";
import { SideBtn } from "../../components/UI/SideBtn";
import {
  LogOutBtn,
  UserPurchaseData,
  UserSectionContainer,
} from "./UserStyles";
import { clearCart, handleLoader } from "../../redux/cart/cartSlice";
import UserCard from "../../components/sideSections/user/userCard";
import {
  Divider,
  DeliveryInfo,
} from "../../components/headers/cart/CartStyled";
import { ButtonSpinner } from "@chakra-ui/react";

const User = () => {
  const { isAuth } = useSelector((state) => state.user);
  const { cart, loader, totalPrice, shippingCost } = useSelector(
    (state) => state.allCart
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    isAuth ? navigate(`/usuario`) : navigate("/signin");
  }, [navigate, isAuth]);

  const handleLogout = () => {
    if (
      window.confirm(
        "¿Desea cerrar su sesión? Se eliminará su carrito de compras"
      )
    ) {
      dispatch(logout());
      dispatch(clearCart());
    }
    return;
  };

  const handlePurchase = () => {
    dispatch(handleLoader());
    setTimeout(() => {
      navigate("/congrats");
      dispatch(clearCart());
      dispatch(handleLoader());
    }, 2000);
  };

  return (
    <>
      <Layout>
        <SideHero section="Bienvenido!" />

        <BackSectionStyled>
          <UserSectionContainer>
            <h4>Su carrito</h4>
            {cart.length ? (
              cart.map((item) => <UserCard key={item.id} {...item} />)
            ) : (
              <p>
                ¿Quieres realizar una compra?{" "}
                <span onClick={() => navigate("/productos")}>
                  Haz click aquí
                </span>
              </p>
            )}

            {cart.length ? (
              <UserPurchaseData>
                <DeliveryInfo user={true}>
                  <p>Sub-total:</p>
                  <p>${totalPrice}</p>
                </DeliveryInfo>
                <DeliveryInfo user={true}>
                  <p>Delivery:</p>
                  <p>${shippingCost}</p>
                </DeliveryInfo>
                <Divider user={true} />
                <DeliveryInfo user={true}>
                  <h3>Total:</h3>
                  <span>${shippingCost + totalPrice} </span>
                </DeliveryInfo>
                <SideBtn onClick={() => handlePurchase()}>
                  {!loader && "Comprar"}
                  {loader && <ButtonSpinner size="lg" />}
                </SideBtn>
              </UserPurchaseData>
            ) : (
              ""
            )}
            <LogOutBtn onClick={() => handleLogout()}>Cerrar sesión</LogOutBtn>
          </UserSectionContainer>
        </BackSectionStyled>
      </Layout>
    </>
  );
};

export default User;

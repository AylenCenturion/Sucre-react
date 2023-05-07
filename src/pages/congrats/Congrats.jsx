import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import SideHero from "../../components/heros/sideHero/SideHero";
import { logout } from "../../redux/user/user.Slice";
import { useDispatch, useSelector } from "react-redux";
import { BackSectionStyled } from "../../components/UI/BackSection";
import { SideBtn } from "../../components/UI/SideBtn";
import { clearCart } from "../../redux/cart/cartSlice";
import { LogOutBtn } from "../user/UserStyles";

const Congrats = () => {
  const { isAuth } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    isAuth ? navigate(`/congrats`) : navigate("/signin");
  }, [navigate, isAuth]);

  const handleLogout = () => {
    if (window.confirm("¿Desea cerrar su sesión?")) {
      dispatch(logout());
    }
    return;
  };

  return (
    <>
      <Layout>
        <SideHero section="Gracias por su compra!" />

        <BackSectionStyled>
          <h2>Su pedido llegará pronto!</h2>
          <p>Ante cualquier consulta puede comunicarse al 11 15615615</p>
          <LogOutBtn onClick={() => handleLogout()}>Cerrar sesión</LogOutBtn>
        </BackSectionStyled>
      </Layout>
    </>
  );
};

export default Congrats;

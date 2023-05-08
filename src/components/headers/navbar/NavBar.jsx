import React, { useState } from "react";
import {
  Dropdown,
  FixedLogosContainer,
  StyledNavLink,
  NavLogo,
  StyledNavbar,
  CartCounter,
  CartLogoContainer,
} from "./StyledNavBar";
import {
  faBars,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Blur } from "../../UI/Blur";
import Cart from "../cart/Cart";
import {
  handleBlur,
  handleBurger,
  handleCart,
} from "../../../redux/navbar/navbarSlice";
import { useDispatch, useSelector } from "react-redux";

const NavBar = (props) => {
  const { isAuth } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blur, burgerDrop, cartDrop } = useSelector((state) => state.navbar);

  const { totalQuantity } = useSelector((state) => state.allCart);

  return (
    <>
      <StyledNavbar>
        <nav>
          <NavLogo
            className="burger"
            icon={faBars}
            onClick={() => dispatch(handleBurger())}
          />

          <Dropdown open={burgerDrop} className="navMenu" bg={props.color}>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/productos">Productos</StyledNavLink>
            <StyledNavLink to="/contacto">Contacto</StyledNavLink>
            <StyledNavLink to="/tiendas">Tiendas</StyledNavLink>
          </Dropdown>
        </nav>

        <FixedLogosContainer>
          <NavLogo
            className="fixedLogos"
            icon={faUser}
            onClick={() =>
              isAuth ? navigate(`/usuario`) : navigate("/signin")
            }
          />

          <CartLogoContainer>
            <NavLogo
              className="fixedLogos"
              icon={faCartShopping}
              onClick={() => dispatch(handleCart())}
            />
            {totalQuantity != 0 && <CartCounter>{totalQuantity}</CartCounter>}
          </CartLogoContainer>

          <Dropdown open={cartDrop} bg={props.color}>
            <Cart color={props.color} />
          </Dropdown>
        </FixedLogosContainer>
      </StyledNavbar>
      <Blur open={blur} onClick={() => dispatch(handleBlur())} />
    </>
  );
};

export default NavBar;

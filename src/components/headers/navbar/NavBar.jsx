import React, { useState } from "react";
import {
  Dropdown,
  FixedLogosContainer,
  StyledNavLink,
  NavLogo,
  StyledNavbar,
} from "./StyledNavBar";
import {
  faBars,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Blur } from "../../UI/Blur";
import Cart from "../cart/Cart";

const NavBar = (props) => {
  const { isAuth, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [burgerDrop, setBurgerDrop] = useState(false);
  const [cartDrop, setCartDrop] = useState(false);
  const [blur, setBlur] = useState(false);

  const handleBurger = () => {
    setBurgerDrop(!burgerDrop);
    cartDrop ? setCartDrop(!cartDrop) : setBlur(!blur);
  };

  const handleCart = () => {
    setCartDrop(!cartDrop);
    burgerDrop ? setBurgerDrop(!burgerDrop) : setBlur(!blur);
  };

  const handleBlur = () => {
    setBlur(!blur);
    burgerDrop ? setBurgerDrop(!burgerDrop) : setCartDrop(!cartDrop);
  };

  return (
    <>
      <StyledNavbar>
        <nav>
          <NavLogo
            className="burger"
            icon={faBars}
            onClick={() => handleBurger()}
          />

          <Dropdown open={burgerDrop} className="navMenu" bg={props.color}>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/products">Products</StyledNavLink>
            <StyledNavLink to="/contact">Contact</StyledNavLink>
            <StyledNavLink to="/stores">Stores</StyledNavLink>
          </Dropdown>
        </nav>

        <FixedLogosContainer>
          <NavLogo
            className="fixedLogos"
            icon={faUser}
            onClick={() =>
              isAuth ? navigate(`/username/${user}`) : navigate("/login")
            }
          />

          <NavLogo
            className="fixedLogos"
            icon={faCartShopping}
            onClick={() => handleCart()}
          />
          <Dropdown open={cartDrop} bg={props.color}>
            <Cart color={props.color} />
          </Dropdown>
        </FixedLogosContainer>
      </StyledNavbar>
      <Blur open={blur} onClick={() => handleBlur()} />
    </>
  );
};

export default NavBar;

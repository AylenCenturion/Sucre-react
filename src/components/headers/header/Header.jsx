import React from "react";
import { BackHeaderStyled, HeaderStyled, LogoContainer } from "./StyledHeader";
import img from "../../../assets/img";
import NavBar from "../navbar/NavBar";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <BackHeaderStyled bg={props.color}>
        <HeaderStyled>
          <LogoContainer onClick={() => navigate("/")}>
            <img src={img.logo} alt="sucre logo" />
          </LogoContainer>

          <NavBar color={props.color} />
        </HeaderStyled>
      </BackHeaderStyled>
    </>
  );
};

export default Header;

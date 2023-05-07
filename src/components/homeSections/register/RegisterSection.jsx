import React from "react";
import {
  HomeProducts,
  HomeSignIn,
  RegisterSectionContent,
  RegisterSectionStyled,
} from "./RegisterSectionStyles";
import { useNavigate } from "react-router-dom";
import { SectionSubTitle } from "../../UI/Titles";
import { HomeBtn } from "../../UI/HomeBtn";

export default function RegisterSection() {
  const navigate = useNavigate();

  return (
    <>
      <RegisterSectionStyled>
        <HomeSignIn>
          <RegisterSectionContent>
            <SectionSubTitle>
              Compra online para increíbles descuentos
            </SectionSubTitle>
            <HomeBtn onClick={() => navigate("/signin")}>Sign in</HomeBtn>
          </RegisterSectionContent>
        </HomeSignIn>

        <HomeProducts>
          <RegisterSectionContent>
            <SectionSubTitle>
              Bienvenido de vuelta! Probá algo nuevo
            </SectionSubTitle>
            <HomeBtn onClick={() => navigate("/productos")}>Productos</HomeBtn>
          </RegisterSectionContent>
        </HomeProducts>
      </RegisterSectionStyled>
    </>
  );
}

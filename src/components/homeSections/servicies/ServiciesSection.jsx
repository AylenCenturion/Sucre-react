import React from "react";
import {
  CookiesContainer,
  ServicieSectionStyled,
  ServicieTitleContainer,
  ServiciesContainer,
  ServiciesLine,
} from "./ServiciesSectionStyles";
import img from "../../../assets/img";
import { BackSectionStyled } from "../../UI/BackSection";
import { SectionTitle } from "../../UI/Titles";

export default function ServicieSection() {
  return (
    <>
      <BackSectionStyled>
        <ServicieSectionStyled>
          <ServicieTitleContainer>
            <SectionTitle>Nuestros servicios</SectionTitle>
          </ServicieTitleContainer>

          <ServiciesContainer>
            <ServiciesLine>
              <div>
                <h6>Delivery</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div>
                <h6>La mejor calidad</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div>
                <h6>Eventos</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </ServiciesLine>
            <CookiesContainer>
              <img src={img.cookies} alt="Cookies" />
            </CookiesContainer>
            <ServiciesLine>
              <div>
                <h6>Compra online</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div>
                <h6>Recién horneado</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div>
                <h6>Descuentos especiales</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </ServiciesLine>
          </ServiciesContainer>
        </ServicieSectionStyled>
      </BackSectionStyled>
    </>
  );
}

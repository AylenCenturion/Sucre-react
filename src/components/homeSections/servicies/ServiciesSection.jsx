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
                <p>Llegamos a la puerta de todos los hogares de CABA y AMBA.</p>
              </div>
              <div>
                <h6>La mejor calidad</h6>
                <p>
                  Productos de excelencia, certificado por nuestros clientes .
                </p>
              </div>
              <div>
                <h6>Recién horneado</h6>
                <p>Calentito y fresco, siempre listo para vos.</p>
              </div>
            </ServiciesLine>
            <CookiesContainer>
              <img src={img.cookies} alt="Cookies" />
            </CookiesContainer>
            <ServiciesLine>
              <div>
                <h6>Compra online</h6>
                <p>Registarte y disfruta sin moverte de tu casa.</p>
              </div>
              <div>
                <h6>Eventos</h6>
                <p>Contratanos para tus eventos en la sección de contacto.</p>
              </div>
              <div>
                <h6>Cerca tuyo</h6>
                <p>Acercate a cualquiera de nuestras tres sucursales.</p>
              </div>
            </ServiciesLine>
          </ServiciesContainer>
        </ServicieSectionStyled>
      </BackSectionStyled>
    </>
  );
}

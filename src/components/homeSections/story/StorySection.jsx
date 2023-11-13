import React from "react";
import { StoryImg, StorySectionStyled, StoryText } from "./StorySectionStyles";
import img from "../../../assets/img";
import { BackSectionStyled } from "../../UI/BackSection";
import { SectionTitle } from "../../UI/Titles";

export default function StorySection() {
  return (
    <>
      <BackSectionStyled>
        <StorySectionStyled>
          <StoryText>
            <SectionTitle>Nuestra historia</SectionTitle>
            <p>
              Nos dedicamos hace más de 70 años a endulzar los hogares de los
              habitantes de la ciudad Buenos Aires, primero desde el barrio de
              Belgrano y ahora también desde Recoleta y Villa Urquiza. Buscamos
              la excelencia en nuestros productos y en nuestras cocinas, con
              recetas tradicionales y otras novedosas, para satisfacer a todos
              los paladares.
            </p>
          </StoryText>
          <StoryImg>
            <img src={img.story} alt="Baker" />
          </StoryImg>
        </StorySectionStyled>
      </BackSectionStyled>
    </>
  );
}

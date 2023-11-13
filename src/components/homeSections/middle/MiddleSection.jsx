import React from "react";
import { MiddleSectionImg, MiddleSectionText } from "./MiddleSectionStyles";

export default function MiddleSection() {
  return (
    <>
      <MiddleSectionImg />
      <MiddleSectionText>
        <span>Atención amantes del chocolate.</span>
        <p>
          No dejes de probar nuestros cupcakes, cookies, tortas y budines. Estan
          hechos del más exquisito chocolate semiamargo traído desde el Ecuador
          en balsas por remeros mancos para conservar todas sus propiedades
          intactas. Sentirás en cada mordida el sabor del trabajo de más de
          quinientos profesionales que dedican sus vidas al cacao para brindarle
          a tu paladar la mejor experiencia chocolatera del mundo.
        </p>
      </MiddleSectionText>
    </>
  );
}

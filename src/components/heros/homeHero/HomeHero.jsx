import React from "react";
import {
  HeroTitle,
  HeroTitleContainer,
  HomeHeroStyled,
} from "./HomeHeroStyled";

export default function HomeHero() {
  return (
    <>
      <HomeHeroStyled>
        <HeroTitleContainer>
          <HeroTitle>
            Bienvenido a la dulzura, bienvenido a <span>sucré</span>
          </HeroTitle>
        </HeroTitleContainer>
      </HomeHeroStyled>
    </>
  );
}

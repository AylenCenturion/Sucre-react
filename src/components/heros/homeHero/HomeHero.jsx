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
            Welcome to sweetness, welcome to <span>sucré</span>
          </HeroTitle>
        </HeroTitleContainer>
      </HomeHeroStyled>
    </>
  );
}

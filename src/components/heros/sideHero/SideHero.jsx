import React from "react";
import { SideHeroStyled } from "./SideHeroStyled";

export default function SideHero(props) {
  return (
    <>
      <SideHeroStyled>
        <h2>{props.section}</h2>
      </SideHeroStyled>
    </>
  );
}

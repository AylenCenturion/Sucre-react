import styled from "styled-components";
import img from "../../../assets/img";

export const SideHeroStyled = styled.div`
  background-image: url(${img.sideHero});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25rem;
  margin: 2rem 0 0 0;
  position: relative;
  color: #fff;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(0.7);
  }

  h2 {
    z-index: 2;
    font-size: clamp(30px, 4vw, 50px);
    font-weight: 400;
  }
`;

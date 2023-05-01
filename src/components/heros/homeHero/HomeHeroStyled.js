import styled from "styled-components";
import img from "../../../assets/img";

export const HomeHeroStyled = styled.section`
  background-image: url(${img.hero});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  width: 100%;
  height: 40rem;
  color: white;
  padding: 25px;
  margin: 0 auto;

  @media screen and (min-width: 900px) {
    padding: 100px 120px;
    margin: 0 auto;
    background-position: center;
  }

  @media screen and (min-width: 1400px) {
    display: flex;
    justify-content: center;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(30px, 4vw, 50px);
  font-weight: 300;
  line-height: 40px;
  min-width: 250px;
  max-width: 440px;

  @media screen and (min-width: 900px) {
    line-height: 60px;
  }

  & span {
    font-weight: 600;
  }
`;

export const HeroTitleContainer = styled.div`
  @media screen and (min-width: 1400px) {
    width: 1200px;
    display: flex;
    justify-content: flex-start;
  }
`;

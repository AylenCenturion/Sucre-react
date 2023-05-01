import styled from "styled-components";
import img from "../../../assets/img";

export const RegisterSectionStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1400px;
`

export const HomeSignIn = styled.div`
  background-color: var(--brown);
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 50%;
  min-width: 270px;
  height: 20rem;
  margin: 0 auto;

  @media screen and ( max-width: 555px){
    height: 12rem;
  }
`

export const HomeLogIn = styled.div`
  background-image: url(${img.slice});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 50%;
  height: 20rem;
  position: relative;

  &::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(0.6);
  }

  @media screen and ( max-width: 555px){
    height: 12rem;
  }
`

export const RegisterSectionContent = styled.div`
  width: 80%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  text-align: center;
  gap: 25px;  
`
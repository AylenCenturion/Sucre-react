import styled from "styled-components";

export const ServicieSectionStyled = styled.div`
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ServicieTitleContainer = styled.div`
  max-width: 1200px;
  padding: 10px 0;
  @media screen and (max-width: 900px) {
    padding-bottom: 20px;
  }
`;

export const ServiciesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 900px) {
    padding-bottom: 20px;
    flex-wrap: nowrap;
    gap: 10px;
  }
`;

export const ServiciesLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & p {
    font-size: 11px;
    min-width: 100px;
    max-width: 230px;
  }

  & h6 {
    font-size: clamp(11px, 4vw, 14px);
  }
`;

export const CookiesContainer = styled.div`
  max-width: 270px;

  & img {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

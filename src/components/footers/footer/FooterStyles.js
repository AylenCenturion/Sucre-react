import styled from "styled-components";

export const BackFooterStyled = styled.div`
  background-color: var(--black);
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 35px;
  max-width: 1400px;
  padding: 45px;

  @media screen and (max-width: 1200px) {
    padding: 20px;
  }
`;

export const FooterMap = styled.div`
  width: 280px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Divider = styled.div`
  background-color: #fff;
  height: 1px;
  width: 250px;
`;

export const MediaSection = styled.div`
  padding: 15px;
  display: flex;
  gap: 30px;
`;

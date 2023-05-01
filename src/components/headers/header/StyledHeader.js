import styled from "styled-components";

export const BackHeaderStyled = styled.div`
  background-color: ${(props) => props.bg || "var(--brown)"};
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

export const HeaderStyled = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  z-index: 4;
`;

export const LogoContainer = styled.div`
  width: 140px;
  z-index: 4;

  & img {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    width: 100px;
  }
`;

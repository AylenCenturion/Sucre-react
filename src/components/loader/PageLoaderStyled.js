import styled, { keyframes } from "styled-components";

const pageLoader = keyframes`
  0%{ opacity: 0; }
  100%{ opacity: 1; }
`;

export const PageLoaderStyled = styled.div`
  animation: ${pageLoader} 1s ease-in 0s 1;
`;

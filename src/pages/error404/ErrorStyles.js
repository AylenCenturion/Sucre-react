import styled from "styled-components";

export const ErrorMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  padding: 18% 0;
  text-align: center;

  & h2 {
    font-size: clamp(40px, 4vh, 35px);
  }

  & h3 {
    font-size: clamp(25px, 4vh, 20px);
  }
`;

import styled from "styled-components";

export const InputStyled = styled.input`
  border: 1px solid ${(props) => props.err || "var(--lightGrey)"};
  border-radius: 4px;
  padding: 8px;
  appearance: none;
  outline: none;
  margin-bottom: 2px;
  color: ${(props) => props.err || "black"};

  &::placeholder {
    color: #aaa;
    transition-property: color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

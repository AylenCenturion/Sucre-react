import styled from "styled-components";

export const Textarea = styled.textarea`
  border: 1px solid var(--lightGrey);
  border-radius: 4px;
  padding: 8px;
  appearance: none;
  outline: none;
  height: 100%;
  width: 100%;

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

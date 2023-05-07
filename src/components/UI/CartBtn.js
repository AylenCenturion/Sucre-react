import styled from "styled-components";

export const CartBtn = styled.button`
  padding: 5px;
  background-color: ${({ disabled }) => (disabled ? "#c7c7c7" : "#fff")};
  border-radius: 8px;
  transition: all 0.2s ease-in;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  width: ${({ card }) => (card ? "120px" : "170px")};
  border: 1px solid ${({ card }) => (card ? " #00000036" : "#fff")};
  font-size: 15px;
  font-weight: 500;
  color: #473f35;
  width: 100%;

  &:hover {
    background-color: ${({ card, disabled }) =>
      card ? "var(--darkGrey)" : disabled ? "#c7c7c7" : "transparent"};
    color: ${({ disabled }) => (disabled ? "#473f35" : "#fff")};
  }
`;

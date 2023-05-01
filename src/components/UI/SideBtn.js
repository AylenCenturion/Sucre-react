import styled from "styled-components";

export const SideBtn = styled.button`
  color: ${({ selected }) => (selected ? "#fff" : "var(--brown)")};
  font-size: 19px;
  background-color: transparent;
  border-radius: 5px;
  width: ${(props) => props.w || "100%"};
  appearance: none;
  border: 2px solid var(--brown);
  height: 42px;
  background-image: ${({ selected }) =>
    selected
      ? "linear-gradient( 45deg, var(--brown) 50%, var(--brown) 50%)"
      : "linear-gradient( 45deg, var(--brown) 50%, #fff 50%)"};
  cursor: pointer;
  background-size: 250%;
  background-repeat: no-repeat;
  background-position: right;
  transition: all 0.3s ease;
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;

  &:hover {
    background-position: left;
    color: #fff;
  }

  /* &:focus{
    background-image: linear-gradient( 45deg, var(--brown) 50%, var(--brown) 50%);
    color: #fff;
  } */

  &.category {
    width: 160px;
    font-size: 19px;
    font-weight: 500;
  }
`;

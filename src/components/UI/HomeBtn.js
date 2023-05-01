import styled, { keyframes } from "styled-components";

const shadow = keyframes`
  0%{
    box-shadow: 5px 5px 20px #fff,-5px -5px 20px #fff
  }
  50%{
    box-shadow: 1px 1px 2px #fff,-1px -1px 2px #fff
  }
  100%{
    box-shadow: 5px 5px 20px #fff,-5px -5px 20px #fff
  }
`;

export const HomeBtn = styled.button`
  width: 150px;
  height: 40px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 10px 5px 5px rgba(255, 255, 255, 0.686);
  background-color: transparent;
  border: 1px solid #fff;
  font-size: 18px;
  color: #fff;
  position: relative;
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: linear;

  animation: ${shadow} 2s infinite;

  &:hover {
    color: var(--brown);
    background-color: #fff;
  }

  &:focus {
    background-color: #fff;
    color: var(--brown);
  }
`;

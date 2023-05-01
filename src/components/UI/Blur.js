import styled from "styled-components";

export const Blur = styled.div`
  width: 100%;
  height: 150vh;
  content: "";
  left: 0;
  top: 142px;
  background-color: #ffffff00;
  z-index: 2;
  position: absolute;
  display: ${({ open }) => (open ? "flex" : "none")};

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    z-index: 2;
  }

  @media screen and (max-width: 900px) {
    top: 100px;
  }
`;

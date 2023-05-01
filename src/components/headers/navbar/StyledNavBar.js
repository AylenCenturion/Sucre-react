import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  z-index: 4;

  @media screen and (max-width: 900px) {
    width: auto;
    gap: 20px;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${(props) => props.bg || "var(--brown)"};
  z-index: ${({ open }) => (open ? "3" : "6")};
  position: absolute;
  top: 130px;
  right: ${({ open }) => (open ? "0" : "-100%")};
  align-items: center;
  width: 320px;
  gap: 20px;
  transition: all 0.4s ease-in;
  padding: 30px 22px;
  border-bottom-left-radius: 8px;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: calc(101vh - 90px);
    z-index: 3;
    border-bottom-left-radius: 0px;
  }

  @media screen and (max-width: 900px) {
    top: 95px;
  }

  &.navMenu {
    line-height: 115px;
    justify-content: center;
    padding: 90px 0px;

    @media screen and (min-width: 900px) {
      transform: translate(0);
      flex-direction: row;
      position: static;
      transition: none;
      display: flex;
      padding: 5px;
      width: 290px;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  font-size: 22px;

  &.active,
  :hover {
    transition: all.1s;
    font-weight: 600;
  }
`;

export const FixedLogosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLogo = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: #fff;
  cursor: pointer;

  &.fixedLogos {
    @media screen and (max-width: 900px) {
      font-size: 20px;
    }
  }

  &.burger {
    @media screen and (min-width: 900px) {
      display: none;
    }
  }
`;

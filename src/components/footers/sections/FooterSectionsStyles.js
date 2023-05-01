import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const FooterSectionsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  gap: 30px;
  border-bottom-width: 1px solid #fff;

  @media screen and (max-width: 400px) {
    justify-content: left;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  & p {
    font-size: 16px;
  }
`;

export const FooterTitle = styled.h6`
  font-weight: 500;
  font-size: 20px;
`;

export const FooterContact = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FooterIcon = styled(FontAwesomeIcon)`
  font-size: 17px;
  color: #fff;
`;

export const FooterLinkItem = styled(NavLink)`
  font-size: 17px;
  color: #fff;
`;

export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const SubscribeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: var(--black);
  border-radius: 2px;
  cursor: pointer;
  padding: 8px;
  gap: 8px;

  & input {
    border: none;
    width: 100%;
    outline: none;
  }
`;
const plane = keyframes`
  from {
    color: var(--black);
  }
  to {
    color: var(--brown);
  }
`;

export const AnimatedPlane = styled.div`
  color: var(--black);
  cursor: pointer;
  font-size: 22px;

  animation: ${plane} 2s ease-in infinite 0s alternate;
`;

//faltaria el small para el mensaje

import React from "react";
import {
  Divider,
  MediaSection,
  BackFooterStyled,
  FooterStyled,
  FooterMap,
} from "./FooterStyles";
import { LogoContainer } from "../../headers/header/StyledHeader";
import img from "../../../assets/img";
import FooterSections from "../sections/FooterSections";
import { FooterIcon } from "../sections/FooterSectionsStyles";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <BackFooterStyled>
        <FooterStyled>
          <LogoContainer>
            <img src={img.logo} alt="sucre logo" />
          </LogoContainer>

          <FooterSections />

          <FooterMap>
            <img src={img.map} alt="sucre logo" style={{ width: "100%" }} />
          </FooterMap>
        </FooterStyled>
        <Divider />
        <MediaSection>
          <FooterIcon icon={faFacebook} />
          <FooterIcon icon={faTwitter} />
          <FooterIcon icon={faInstagram} />
        </MediaSection>
      </BackFooterStyled>
    </>
  );
};

export default Footer;

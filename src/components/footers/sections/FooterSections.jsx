import React, { useState } from "react";
import {
  FooterContact,
  FooterSection,
  FooterTitle,
  FooterSectionsStyled,
  FooterLinkItem,
  SubscribeContainer,
  AnimatedPlane,
  FooterNav,
  FooterIcon,
} from "./FooterSectionsStyles";
import {
  faEnvelope,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterSections = () => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    setValue("");
  };
  return (
    <FooterSectionsStyled>
      <FooterSection>
        <FooterTitle>Contact</FooterTitle>
        <FooterContact>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sucre@gmail.com"
            target="_blank"
          >
            <FooterIcon icon={faEnvelope} />
          </a>
          <p>sucre@gmail.com</p>
        </FooterContact>
        <FooterContact>
          <FooterIcon icon={faPhone} />
          <div>
            <p>+549 11 15415415</p>
            <p>+549 11 15615615</p>
            <p>+549 11 15815815</p>
          </div>
        </FooterContact>
      </FooterSection>

      <FooterSection>
        <FooterTitle>Navegate</FooterTitle>
        <FooterNav>
          <FooterLinkItem to="/">Home</FooterLinkItem>
          <FooterLinkItem to="/products">Products</FooterLinkItem>
          <FooterLinkItem to="/contact">Contact</FooterLinkItem>
          <FooterLinkItem to="/stores">Stores</FooterLinkItem>
        </FooterNav>
      </FooterSection>

      <FooterSection>
        <FooterTitle>Suscribe</FooterTitle>
        <p>Stay up to date with our latest news</p>
        <SubscribeContainer>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type your mail"
          />
          <AnimatedPlane onClick={() => handleSubmit()}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </AnimatedPlane>
        </SubscribeContainer>
      </FooterSection>
    </FooterSectionsStyled>
  );
};

export default FooterSections;

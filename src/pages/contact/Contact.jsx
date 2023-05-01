import React from "react";
import Layout from "../../components/layout/Layout";
import SideHero from "../../components/heros/sideHero/SideHero";
import {
  ContactBtnContainer,
  ContactForm,
  ContactSection,
  ContactText,
  MessageBox,
} from "./ContactStyles";
import { InputStyled } from "../../components/UI/input/InputStyled";
import { Textarea } from "../../components/UI/Textarea";
import { SideBtn } from "../../components/UI/SideBtn";
import { BackSectionStyled } from "../../components/UI/BackSection";

const Contact = () => {
  return (
    <>
      <Layout>
        <SideHero section="Contact" />

        <BackSectionStyled>
          <ContactSection>
            <ContactText>
              To budget your event, share your experience or give us
              suggestions.
            </ContactText>
            <ContactForm>
              <InputStyled
                type="text"
                placeholder="Enter your name"
                name="name"
              />
              <InputStyled
                type="email"
                placeholder="Enter your email adress"
                name="email"
              />
              <InputStyled
                type="text"
                placeholder="Enter your phone"
                name="phone"
              />
            </ContactForm>
            <MessageBox>
              <Textarea placeholder="Your message..." name="message" />
            </MessageBox>
            <ContactBtnContainer>
              <SideBtn type="button">Send</SideBtn>
            </ContactBtnContainer>
          </ContactSection>
        </BackSectionStyled>
      </Layout>
    </>
  );
};

export default Contact;

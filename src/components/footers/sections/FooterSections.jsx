import React from "react";
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
  FooterForm,
} from "./FooterSectionsStyles";
import {
  faEnvelope,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { footerInitialValues, footerValidationSchema } from "../../../formik";

const FooterSections = () => {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: footerInitialValues,
    validationSchema: footerValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log({ values });
      resetForm();
    },
  });

  return (
    <FooterSectionsStyled>
      <FooterSection>
        <FooterTitle>Contacto</FooterTitle>
        <FooterContact>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sucre@gmail.com"
            target="_blank"
            rel="noreferrer"
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
        <FooterTitle>Navegá</FooterTitle>
        <FooterNav>
          <FooterLinkItem to="/">Home</FooterLinkItem>
          <FooterLinkItem to="/productos">Productos</FooterLinkItem>
          <FooterLinkItem to="/contacto">Contacto</FooterLinkItem>
          <FooterLinkItem to="/tiendas">Tiendas</FooterLinkItem>
        </FooterNav>
      </FooterSection>

      <FooterSection>
        <FooterTitle>Suscribite</FooterTitle>
        <p>Para estar al día con nuestras noticias</p>
        <FooterForm onSubmit={(e) => handleSubmit(e)}>
          <SubscribeContainer>
            <input
              name="email"
              type="email"
              placeholder="Ingresá tu email"
              id="email"
              {...getFieldProps("email")}
            />
            <AnimatedPlane type="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
            </AnimatedPlane>
          </SubscribeContainer>
          <small>{touched.email && errors.email}</small>
        </FooterForm>
      </FooterSection>
    </FooterSectionsStyled>
  );
};

export default FooterSections;

import React from "react";
import Layout from "../../components/layout/Layout";
import SideHero from "../../components/heros/sideHero/SideHero";
import {
  ContactBtnContainer,
  ContactForm,
  ContactSection,
  ContactText,
  InputsContainer,
  MessageBox,
} from "./ContactStyles";
import { Textarea } from "../../components/UI/Textarea";
import { SideBtn } from "../../components/UI/SideBtn";
import { BackSectionStyled } from "../../components/UI/BackSection";
import { useFormik } from "formik";
import { contactInitialValues, contactValidationSchema } from "../../formik";
import ContactInput from "../../components/UI/input/contactInput";

const Contact = () => {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: contactInitialValues,
    validationSchema: contactValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log({ values });
      resetForm();
    },
  });

  return (
    <>
      <Layout>
        <SideHero section="Contact" />

        <BackSectionStyled>
          <ContactSection>
            <ContactText>
              Para reservar un evento, compartir tu experiencia o darnos
              sugerencias.
            </ContactText>
            <ContactForm onSubmit={(e) => handleSubmit(e)}>
              <InputsContainer>
                <ContactInput
                  label="Nombre"
                  name="name"
                  type="text"
                  isError={touched.name && errors.name}
                  {...getFieldProps("name")}
                />
                <ContactInput
                  label="Email"
                  name="email"
                  type="email"
                  isError={touched.email && errors.email}
                  {...getFieldProps("email")}
                />
                <ContactInput
                  label="Teléfono"
                  name="phone"
                  type="text"
                  isError={touched.address && errors.address}
                  {...getFieldProps("phone")}
                />
              </InputsContainer>
              <MessageBox>
                <Textarea
                  placeholder="Tu mensaje..."
                  name="message"
                  id="message"
                  {...getFieldProps("message")}
                />
                {touched.message && errors.message && (
                  <small>{touched.message && errors.message}</small>
                )}
              </MessageBox>
              <ContactBtnContainer>
                <SideBtn type="submit">Enviar</SideBtn>
              </ContactBtnContainer>
            </ContactForm>
          </ContactSection>
        </BackSectionStyled>
      </Layout>
    </>
  );
};

export default Contact;

import React from "react";
import { ErrorMessageContainer } from "./ErrorStyles";
import Header from "../../components/headers/header/Header";
import Footer from "../../components/footers/footer/Footer";
import { BackSectionStyled } from "../../components/UI/BackSection";

const Error404 = () => {
  return (
    <>
      <Header />
      <BackSectionStyled>
        <ErrorMessageContainer>
          <h2>Error 404!</h2>
          <h3>The page you are looking for does not exist </h3>
        </ErrorMessageContainer>
      </BackSectionStyled>
      <Footer />
    </>
  );
};

export default Error404;

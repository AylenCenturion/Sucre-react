import React from "react";
import Header from "../headers/header/Header";
import Footer from "../footers/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

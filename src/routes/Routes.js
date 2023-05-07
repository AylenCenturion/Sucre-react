import React from "react";
import { Route, Routes as RDRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Products from "../pages/products/Products";
import Error404 from "../pages/error404/Error404";
import SignIn from "../pages/sign in/SignIn";
import Stores from "../pages/stores/Stores";
import User from "../pages/user/User";
import { useSelector } from "react-redux";
import Congrats from "../pages/congrats/Congrats";

export default function Routes() {
  const { isAuth } = useSelector((state) => state.user);

  return (
    <>
      <RDRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/tiendas" element={<Stores />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/usuario" element={<User />} />
        <Route path="/congrats" element={<Congrats />} />
      </RDRoutes>
    </>
  );
}

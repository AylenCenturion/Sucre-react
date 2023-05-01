import React from "react";
import { Route, Routes as RDRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Products from "../pages/products/Products";
import Error404 from "../pages/error404/Error404";
import LogIn from "../pages/log in/LogIn";
import SignIn from "../pages/sign in/SignIn";
import Stores from "../pages/stores/Stores";
import User from "../pages/user/User";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import ProtectedRoute from "../context/ProtectedRoute";

export default function Routes() {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <RDRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/signin" element={<SignIn />} />

        {!isAuth && <Route path="login" element={<LogIn />} />}
        <Route
          path="username/:username"
          element={
            <ProtectedRoute redirectTo="/login">
              <User />
            </ProtectedRoute>
          }
        />
      </RDRoutes>
    </>
  );
}

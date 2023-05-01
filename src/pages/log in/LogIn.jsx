import React from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import SideHero from "../../components/heros/sideHero/SideHero";
import { BackSectionStyled } from "../../components/UI/BackSection";
import {
  FormContainer,
  FormField,
} from "../../components/sideSections/forms/FormsStyles";
import { InputStyled } from "../../components/UI/input/InputStyled";
import { SideBtn } from "../../components/UI/SideBtn";

const LogIn = () => {
  const { handleSubmit, handleChange, form, isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [navigate, isAuth]);

  return (
    <>
      <Layout>
        <SideHero section="Log In" />

        <BackSectionStyled>
          <FormContainer>
            <FormField>
              <label htmlFor="email">Email</label>
              <InputStyled
                type="email"
                value={form.username}
                name="username"
                onChange={handleChange}
                id="username"
                placeholder="Enter your email adress"
                label="email"
              />
              {/* <small></small> */}
            </FormField>
            <FormField>
              <label htmlFor="password">Password</label>
              <InputStyled
                type="password"
                value={form.password}
                name="password"
                onChange={handleChange}
                id="password"
                placeholder="Enter your password"
                label="password"
                error="Required field"
                // err='var(--red)'
              />
              {/* <small></small> */}
              <p>Forgot your password?</p>
            </FormField>
            <SideBtn onClick={(e) => handleSubmit(e)}>Log in</SideBtn>
            <p>
              Don't have an account?{" "}
              <span onClick={() => navigate("/signin")}>Sign in</span>
            </p>
          </FormContainer>
        </BackSectionStyled>
      </Layout>
    </>
  );
};

export default LogIn;

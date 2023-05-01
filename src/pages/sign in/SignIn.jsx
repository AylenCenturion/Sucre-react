import React from "react";
import Layout from "../../components/layout/Layout";
import SideHero from "../../components/heros/sideHero/SideHero";
import { BackSectionStyled } from "../../components/UI/BackSection";
import {
  FormContainer,
  FormField,
} from "../../components/sideSections/forms/FormsStyles";
import { InputStyled } from "../../components/UI/input/InputStyled";
import { SideBtn } from "../../components/UI/SideBtn";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <>
      <Layout>
        <SideHero section="Sign In" />

        <BackSectionStyled>
          <FormContainer>
            <FormField>
              <label htmlFor="name">Name *</label>
              <InputStyled
                type="text"
                value=""
                name="name"
                // onChange={handleChange}
                id="name"
                placeholder="Enter your name"
                label="name"
              />
              {/* <small></small> */}
            </FormField>
            <FormField>
              <label htmlFor="email">Email *</label>
              <InputStyled
                type="email"
                value=""
                name="username"
                // onChange={handleChange}
                id="email"
                placeholder="Enter your email adress"
                label="email"
              />
              {/* <small></small> */}
            </FormField>
            <FormField>
              <label htmlFor="phone">Phone</label>
              <InputStyled
                type="text"
                value=""
                name="phone"
                // onChange={handleChange}
                id="phone"
                placeholder="Enter your phone"
                label="email"
              />
              {/* <small></small> */}
            </FormField>
            <FormField>
              <label htmlFor="password">Password *</label>
              <InputStyled
                type="password"
                value=""
                name="password"
                // onChange={handleChange}
                id="password"
                placeholder="Enter your password"
                label="Password"
                error="Required field"
                // err='var(--red)'
              />
              {/* <small></small> */}
            </FormField>
            <FormField>
              <label htmlFor="confPassword">Confirm password *</label>
              <InputStyled
                type="password"
                value=""
                name="password"
                // onChange={handleChange}
                id="confPassword"
                placeholder="Confirm your password"
                label="confPassword"
                error="Required field"
                // err='var(--red)'
              />
              {/* <small></small> */}
              <span>* Required field</span>
            </FormField>
            <SideBtn>Sign in</SideBtn>
            <p>
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>Log in</span>
            </p>
          </FormContainer>
        </BackSectionStyled>
      </Layout>
    </>
  );
};

export default SignIn;

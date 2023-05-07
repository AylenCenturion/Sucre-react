import React from "react";
import Layout from "../../components/layout/Layout";
import SideHero from "../../components/heros/sideHero/SideHero";
import { BackSectionStyled } from "../../components/UI/BackSection";
import { FormContainer } from "../../components/sideSections/forms/FormsStyles";
import { SideBtn } from "../../components/UI/SideBtn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleSigninSubmit } from "../../redux/user/user.Slice";
import { useEffect } from "react";
import { useFormik } from "formik";
import { signinInitialValues, signinValidationSchema } from "../../formik";
import FormField from "../../components/UI/input/Input";

const SignIn = () => {
  const navigate = useNavigate();

  const { isAuth } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    isAuth ? navigate(`/usuario`) : navigate("/signin");
  }, [navigate, isAuth]);

  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: signinInitialValues,
    validationSchema: signinValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log({ values });
      dispatch(handleSigninSubmit());
      resetForm();
    },
  });

  return (
    <>
      <Layout>
        <SideHero section="Sign In" />

        <BackSectionStyled>
          <FormContainer onSubmit={(e) => handleSubmit(e)}>
            <FormField
              label="Nombre"
              name="name"
              type="text"
              isError={touched.name && errors.name}
              {...getFieldProps("name")}
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              isError={touched.email && errors.email}
              {...getFieldProps("email")}
            />
            <FormField
              label="Dirección"
              name="address"
              type="text"
              isError={touched.address && errors.address}
              {...getFieldProps("address")}
            />
            <FormField
              label="Localidad"
              name="location"
              type="text"
              isError={touched.location && errors.location}
              {...getFieldProps("location")}
            />
            <SideBtn type="submit">Sign in</SideBtn>
          </FormContainer>
        </BackSectionStyled>
      </Layout>
    </>
  );
};

export default SignIn;

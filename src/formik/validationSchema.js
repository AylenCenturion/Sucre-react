import * as Yup from "yup";

export const signinValidationSchema = Yup.object({
  name: Yup.string().trim().required("Campo requerido"),
  email: Yup.string().email("Email inválido").required("Campo requerido"),
  address: Yup.string().trim().required("Campo requerido"),
  location: Yup.string().trim().required("Campo requerido"),
});

export const contactValidationSchema = Yup.object({
  name: Yup.string().trim().required("Campo requerido"),
  email: Yup.string().email("Email inválido").required("Campo requerido"),
  phone: Yup.string().trim(),
  message: Yup.string()
    .max(250, "Máximo 250 caracteres")
    .required("Campo requerido"),
});

export const footerValidationSchema = Yup.object({
  email: Yup.string().email("Email inválido").required("Campo requerido"),
});

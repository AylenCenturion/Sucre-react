import { FormFieldStyled } from "../../sideSections/forms/FormsStyles";
import { InputStyled } from "./InputStyled";

import React from "react";

export default function FormField({ name, label, type, isError, ...field }) {
  return (
    <>
      <FormFieldStyled>
        <label htmlFor={name}>{label}</label>
        <InputStyled
          type={type}
          name={name}
          error={isError}
          id={name}
          placeholder={`Ingresá tu ${label.toLowerCase()}`}
          {...field}
        />
        {isError && <small>{isError}</small>}
      </FormFieldStyled>
    </>
  );
}

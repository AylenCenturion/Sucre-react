import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  box-sizing:border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
}

:root{
  --brown: #c09a62;
  --black: #13100d;
  --lightGrey: #00000029;
  --mediumGrey: #0000008a;
  --darkGrey: #000000d4;
  --darkerGrey: #000000e0;
  --red:#b80000;
}
`;

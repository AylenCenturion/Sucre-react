import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageLoaderStyled } from "./PageLoaderStyled";

export default function PageLoader({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <PageLoaderStyled> {children} </PageLoaderStyled>;
}

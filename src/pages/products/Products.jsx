import React from "react";
import Layout from "../../components/layout/Layout";
import SideHero from "../../components/heros/sideHero/SideHero";
import { ProductsSection } from "./ProductsStyles";
import { SectionTitle } from "../../components/UI/Titles";
import CategoriesContainer from "../../components/sideSections/productsSections/CategoriesContainer";
import RecommendedContainer from "../../components/sideSections/productsSections/RecommendedContainer";
import ProductsContainer from "../../components/sideSections/productsSections/ProductsContainer";

const Products = () => {
  return (
    <>
      <Layout>
        <SideHero section="Productos" />

        <ProductsSection>
          <SectionTitle>Recomendados</SectionTitle>
          <RecommendedContainer />
          <CategoriesContainer />
          <ProductsContainer />
        </ProductsSection>
      </Layout>
    </>
  );
};

export default Products;

import React from "react";
import Header from "../../components/headers/header/Header";
import Footer from "../../components/footers/footer/Footer";
import HomeHero from "../../components/heros/homeHero/HomeHero";
import StorySection from "../../components/homeSections/story/StorySection";
import GallerySection from "../../components/homeSections/gallery/GallerySection";
import MiddleSection from "../../components/homeSections/middle/MiddleSection";
import RegisterSection from "../../components/homeSections/register/RegisterSection";
import ServicieSection from "../../components/homeSections/servicies/ServiciesSection";

const Home = () => {
  return (
    <>
      <Header color="var(--black)" />
      <HomeHero />
      <StorySection />
      <GallerySection />
      <MiddleSection />
      <RegisterSection />
      <ServicieSection />
      <Footer />
    </>
  );
};

export default Home;

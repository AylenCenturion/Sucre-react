import React from "react";
import Layout from "../../components/layout/Layout";
import SideHero from "../../components/heros/sideHero/SideHero";
import { BackStoresSection } from "./StoreStyles";
import img from "../../assets/img";
import Store from "../../components/sideSections/stores/Store";

const Stores = () => {
  return (
    <>
      <Layout>
        <SideHero section="Stores" />
        <BackStoresSection>
          <Store
            name="Belgrano"
            img={img.store1}
            adress="Av. Cabildo 2370, CABA"
            weekHours="8:30 to 19:30"
            weekendHours="9:00 to 21:00"
            phone="+549 11 15415415"
            iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26285.525095881196!2d-58.45379105143526!3d-34.56138745928725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5cfa6d47c6f%3A0xb1a5af44becf7d15!2sAz%C3%BAcar%20Son%20y%20Ron!5e0!3m2!1ses!2sar!4v1657837742847!5m2!1ses!2sar"
          />

          <Store
            name="Recoleta"
            img={img.store2}
            adress="Juan María Gutierrez 2698, CABA"
            weekHours="7:30 to 19:30"
            weekendHours="9:00 to 20:00"
            phone="+549 11 15615615"
            iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15626.476955103784!2d-58.42245502221165!3d-34.5772948568981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb7f352b4ec9%3A0xb52544f3a2f50465!2sBigotes%20de%20Azucar!5e0!3m2!1ses!2sar!4v1657838336690!5m2!1ses!2sar"
          />

          <Store
            name="Villa Urquiza"
            img={img.store3}
            adress="Franklin D. Roosevelt 5614, Buenos Aires"
            weekHours="9:30 to 20:30"
            weekendHours="9:00 to 21:00"
            phone="+549 11 15815815"
            iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26280.620794241222!2d-58.52228900563065!3d-34.57690300555085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb727d71dd73d%3A0x6aa3efebb7a802c!2sBigotes%20de%20Azucar!5e0!3m2!1ses!2sar!4v1657838529926!5m2!1ses!2sar"
          />
        </BackStoresSection>
      </Layout>
    </>
  );
};

export default Stores;

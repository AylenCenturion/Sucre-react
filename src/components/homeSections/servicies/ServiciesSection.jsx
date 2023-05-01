import React from 'react';
import { 
  CookiesContainer, 
  ServicieSectionStyled, 
  ServicieTitleContainer, 
  ServiciesContainer, 
  ServiciesLine 
} from './ServiciesSectionStyles';
import img from '../../../assets/img';
import { BackSectionStyled } from '../../UI/BackSection';
import { SectionTitle } from '../../UI/Titles';

export default function ServicieSection() {
  return (
    <>
    <BackSectionStyled>
      <ServicieSectionStyled>
        <ServicieTitleContainer>
          <SectionTitle>Our servicies</SectionTitle>
        </ServicieTitleContainer>

        <ServiciesContainer>
          <ServiciesLine>
            <div>
              <h6>Free delivery</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <h6>Best quality</h6>
              <p>Lorem ipsum dolor sit amet   consectetur adipisicing elit.</p>
            </div>
            <div>
              <h6>Events booking</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </ServiciesLine>
          <CookiesContainer>
            <img src={img.cookies} alt="Cookies"/>
          </CookiesContainer>
          <ServiciesLine>
            <div>
              <h6>Online booking</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <h6>Freshly made</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <h6>Special gift wraps</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </ServiciesLine>
        </ServiciesContainer>

      </ServicieSectionStyled>
    </BackSectionStyled>
    </>
  );
}

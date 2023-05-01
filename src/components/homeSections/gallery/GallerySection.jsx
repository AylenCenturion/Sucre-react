import React from 'react';
import { 
  GalleryColumn, 
  GalleryImgContainer, 
  GalleryItem, 
  GallerySectionStyled, 
  GalleryTitleContainer 
} from './GallerySectionStyled';
import products from '../../../assets/productImg';
import { SectionTitle } from '../../UI/Titles';
import { BackSectionStyled } from '../../UI/BackSection';

export default function GallerySection() {
  return (
    <>
    <BackSectionStyled>
      <GallerySectionStyled>
        <GalleryTitleContainer>
          <SectionTitle>Our gallery</SectionTitle>
        </GalleryTitleContainer>

        <GalleryImgContainer>
          <GalleryColumn>
            <GalleryItem src={products.oreoCake} alt='Oreo cake'/>
            <GalleryItem src={products.veganCookies} alt='Vegan cookies'/>
            <GalleryItem src={products.lemonCup} alt='Lemon cupcakes'/>
          </GalleryColumn>
          <GalleryColumn className='down-column'>
            <GalleryItem src={products.berryCup} alt='Berry cupcakes'/>
            <GalleryItem src={products.chocolatMade} alt='Chocolat madeleines'/>
            <GalleryItem src={products.dripCake} alt='Drip cake'/>
          </GalleryColumn>
          <GalleryColumn className='last-column'>
            <GalleryItem src={products.macarons8} alt='Macarons'/>
            <GalleryItem src={products.strawberryCake} alt='Strawberry cake'/>
            <GalleryItem src={products.chocolatCup} alt='Chocolat cupcake'/>
          </GalleryColumn>
        </GalleryImgContainer>        

      </GallerySectionStyled>
    </BackSectionStyled>
    </>
  );
}

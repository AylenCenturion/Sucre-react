import React from 'react';
import { StoryImg, StorySectionStyled, StoryText } from './StorySectionStyles';
import img from '../../../assets/img';
import { BackSectionStyled } from '../../UI/BackSection';
import { SectionTitle } from '../../UI/Titles';

export default function StorySection() {
  return (
    <>
    <BackSectionStyled>
      <StorySectionStyled>
        <StoryText>
          <SectionTitle>Our story</SectionTitle>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eos sed omnis cupiditate aliquam voluptatum. Possimus debitis eveniet placeat cum aliquid, error, quam quod blanditiis culpa rem enim quos iusto eaque dolore ea fugit, harum voluptas ipsum repudiandae libero dolorum.</p>
        </StoryText>
        <StoryImg>
          <img src={img.story} alt="Baker" />
        </StoryImg>
      </StorySectionStyled>
    </BackSectionStyled>
    </>
  );
}

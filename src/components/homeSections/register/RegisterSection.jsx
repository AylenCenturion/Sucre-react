import React from 'react';
import { HomeLogIn, HomeSignIn, RegisterSectionContent, RegisterSectionStyled } from './RegisterSectionStyles';
import { useNavigate } from 'react-router-dom';
import { SectionSubTitle } from '../../UI/Titles';
import { HomeBtn } from '../../UI/HomeBtn';

export default function RegisterSection() {
  const navigate = useNavigate();

  return (
    <>
    <RegisterSectionStyled>
      <HomeSignIn>
        <RegisterSectionContent>
          <SectionSubTitle>
            Shop online for amazing discounts
          </SectionSubTitle>
          <HomeBtn onClick={() => navigate('/signin')}>
            Sign in
          </HomeBtn>
        </RegisterSectionContent>
      </HomeSignIn>

      <HomeLogIn>
        <RegisterSectionContent>
          <SectionSubTitle>
            Welcome back! Taste something new
          </SectionSubTitle>
          <HomeBtn onClick={() => navigate('/login')}>
          Log in
          </HomeBtn>
        </RegisterSectionContent>
      </HomeLogIn>
    </RegisterSectionStyled>
    </>
  );
}

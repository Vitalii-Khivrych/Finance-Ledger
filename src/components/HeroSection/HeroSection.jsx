import React from 'react';

import { Container, Button, SvgIcon } from 'components';
import {
  HeroSectionStyled,
  BackgroundImage,
  HiddenTitle,
  HeroTitle,
  HeroText,
} from './HeroSection.styled';

import heroImage from 'images/home/showcase.jpg';
import heroImageWebp from 'images/home/showcase.webp';
import heroImageRetina from 'images/home/showcase@2x.jpg';
import heroImageWebpRetina from 'images/home/showcase@2x.webp';

export const HeroSection = () => {
  return (
    <HeroSectionStyled>
      <Container>
        <BackgroundImage>
          <source
            srcSet={`${heroImageWebp} 1x, ${heroImageWebpRetina} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${heroImage} 1x, ${heroImageRetina} 2x`}
            type="image/jpeg"
          />
          <img src={heroImage} alt="background city" loading="lazy" />
        </BackgroundImage>

        <HiddenTitle>Finance Ledger</HiddenTitle>
        <HeroTitle>The Sky Is The Limit</HeroTitle>
        <HeroText>We provide world class financial assistance</HeroText>
        <Button>
          <SvgIcon id="icon-arrow" />
          Read More
        </Button>
      </Container>
    </HeroSectionStyled>
  );
};

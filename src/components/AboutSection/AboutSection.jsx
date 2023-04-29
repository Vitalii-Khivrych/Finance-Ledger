import React from 'react';

import {
  ButtonInverseHover,
  Container,
  PreTitle,
  Title,
  Text,
} from 'components';
import {
  AboutSectionStyled,
  Wrapper,
  AboutImage,
  TextWrapper,
} from './AboutSection.styled';

import aboutImage from 'images/home/people.jpg';
import aboutImageWebp from 'images/home/people.webp';
import aboutImageRetina from 'images/home/people@2x.jpg';
import aboutImageWebpRetina from 'images/home/people@2x.webp';

export const AboutSection = () => {
  return (
    <AboutSectionStyled>
      <Wrapper>
        <AboutImage>
          <source
            srcSet={`${aboutImageWebp} 1x,
              ${aboutImageWebpRetina} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${aboutImage} 1x,
              ${aboutImageRetina} 2x`}
            type="image/jpeg"
          />
          <img src={aboutImage} alt="people" />
        </AboutImage>
        <Container>
          <TextWrapper>
            <PreTitle>What you are looking for</PreTitle>
            <Title>We provide bespoke solutions</Title>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </Text>
            <ButtonInverseHover width="146px" ml="0px">
              Read More
            </ButtonInverseHover>
          </TextWrapper>
        </Container>
      </Wrapper>
    </AboutSectionStyled>
  );
};

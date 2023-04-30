import React from 'react';

import {
  Container,
  TeamTitle,
  TeamText,
  TeamGallery,
  TeamPreTitle,
} from 'components';
import { TeamSectionStyled } from './TeamSection.styled';

export const TeamSection = () => {
  return (
    <TeamSectionStyled>
      <Container>
        <TeamPreTitle center>Who we are</TeamPreTitle>
        <TeamTitle center>Our Professional Team</TeamTitle>
        <TeamText center>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </TeamText>
        <TeamGallery />
      </Container>
    </TeamSectionStyled>
  );
};

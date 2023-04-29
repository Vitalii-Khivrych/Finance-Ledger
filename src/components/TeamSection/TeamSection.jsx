import React from 'react';

import { Container, PreTitle, Title, TeamText, TeamGallery } from 'components';
import { TeamSectionStyled } from './TeamSection.styled';

export const TeamSection = () => {
  return (
    <TeamSectionStyled>
      <Container>
        <PreTitle center>Who we are</PreTitle>
        <Title center>Our Professional Team</Title>
        <TeamText center>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </TeamText>
        <TeamGallery />
      </Container>
    </TeamSectionStyled>
  );
};

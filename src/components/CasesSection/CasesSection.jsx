import React from 'react';

import {
  Container,
  PreTitle,
  Title,
  CasesText,
  CasesGallery,
} from 'components';
import { CasesSectionStyled } from './CasesSection.styled';

export const CasesSection = () => {
  return (
    <CasesSectionStyled id="cases">
      <Container>
        <PreTitle center>This is what we do</PreTitle>
        <Title center lh="54">
          Business Cases
        </Title>
        <CasesText center>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </CasesText>
        <CasesGallery />
      </Container>
    </CasesSectionStyled>
  );
};

import React from 'react';

import {
  Container,
  CasesPreTitle,
  Title,
  CasesText,
  CasesGallery,
} from 'components';
import { CasesSectionStyled } from './CasesSection.styled';

export const CasesSection = () => {
  return (
    <CasesSectionStyled id="cases">
      <Container>
        <CasesPreTitle center>This is what we do</CasesPreTitle>
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

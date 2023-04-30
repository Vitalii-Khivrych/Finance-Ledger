import React from 'react';

import { FooterStyled, FooterText } from './Footer.styled';
import { SocialLinks } from 'components';

export const Footer = () => {
  return (
    <FooterStyled>
      <SocialLinks visible />
      <FooterText>Copyright © 2021 - FinanceLedger</FooterText>
    </FooterStyled>
  );
};

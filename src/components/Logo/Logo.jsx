import React from 'react';

import { SvgIcon } from 'components';
import { LogoLink, Span } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoLink href="/" alt="home page">
      <SvgIcon id={'icon-logo'} />
      Finance <Span>Ledger</Span>
    </LogoLink>
  );
};

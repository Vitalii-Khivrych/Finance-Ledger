import React from 'react';

import { Logo, Navigation, HeaderContainer } from 'components';
import { HeaderStyled } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo />
        <Navigation />
      </HeaderContainer>
    </HeaderStyled>
  );
};

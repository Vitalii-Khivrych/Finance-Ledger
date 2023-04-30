import React, { useEffect, useState } from 'react';

import { Logo, Navigation, HeaderContainer } from 'components';
import { HeaderStyled } from './Header.styled';

export const Header = () => {
  const [isFixedHeader, setIsFixedHeader] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = e => {
    if (window.innerWidth < '768') {
      return e.target.documentElement.scrollTop >= '120'
        ? setIsFixedHeader(true)
        : setIsFixedHeader(false);
    }

    e.target.documentElement.scrollTop >= '70'
      ? setIsFixedHeader(true)
      : setIsFixedHeader(false);

    // console.log('all height', e.target.documentElement.scrollHeight);
    // console.log('scroll', e.target.documentElement.scrollTop);
    // console.log('height window', window.innerHeight);
    // console.log('weight window', window.innerWidth);
  };

  return (
    <HeaderStyled className={isFixedHeader ? 'fixed' : ''}>
      <HeaderContainer>
        <Logo />
        <Navigation />
      </HeaderContainer>
    </HeaderStyled>
  );
};

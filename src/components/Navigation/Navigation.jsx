import React from 'react';

import { NavList, NavItem, Link } from './Navigation.styled';
import { navItems } from 'assets/data/navigation-items';

export const Navigation = () => {
  const handleClickScroll = hash => {
    const heightToElement = document.getElementById(hash).offsetTop;
    const heightHeader = document.getElementById('header').offsetHeight;

    window.scrollTo({
      top: heightToElement - heightHeader,
      behavior: 'smooth',
    });
  };

  return (
    <nav>
      <NavList>
        {navItems.map(({ id, text, hash }) => (
          <NavItem key={id} onClick={() => handleClickScroll(hash)}>
            <Link>{text}</Link>
          </NavItem>
        ))}
      </NavList>
    </nav>
  );
};

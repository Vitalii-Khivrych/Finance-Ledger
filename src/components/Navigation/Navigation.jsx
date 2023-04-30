import React from 'react';

import { NavList, NavItem, Link } from './Navigation.styled';
import { navItems } from 'assets/data/navigation-items';

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        {navItems.map(({ id, text, hash }) => (
          <NavItem
            key={id}
            onClick={() => {
              document
                .getElementById(hash)
                .scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Link href={`#${hash}`}>{text}</Link>
          </NavItem>
        ))}
      </NavList>
    </nav>
  );
};

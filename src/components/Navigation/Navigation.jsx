import React from 'react';
import { nanoid } from 'nanoid';

import { NavList, NavItem } from './Navigation.styled';

const navItems = [
  { id: nanoid(), text: 'Home', hash: '/' },
  { id: nanoid(), text: 'About', hash: 'about' },
  { id: nanoid(), text: 'Cases', hash: 'cases' },
  { id: nanoid(), text: 'Blog', hash: 'blog' },
  { id: nanoid(), text: 'Contact', hash: 'contact' },
];

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        {navItems.map(({ id, text, hash }) => (
          <NavItem key={id}>
            <a href={`#${hash}`}>{text}</a>
          </NavItem>
        ))}
      </NavList>
    </nav>
  );
};

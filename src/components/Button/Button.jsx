import React from 'react';

import { ButtonStyled } from './Button.styled';

export const Button = ({ children, width, ml }) => {
  return (
    <ButtonStyled width={width} ml={ml}>
      {children}
    </ButtonStyled>
  );
};

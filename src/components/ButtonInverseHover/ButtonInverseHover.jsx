import React from 'react';

import { ButtonInverseStyled } from './ButtonInverseHover.styled';

export const ButtonInverseHover = ({ children, width, blue }) => {
  return (
    <ButtonInverseStyled width={width} blue={blue}>
      {children}
    </ButtonInverseStyled>
  );
};

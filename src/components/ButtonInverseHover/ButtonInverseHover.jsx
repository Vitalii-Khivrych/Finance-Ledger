import React from 'react';

import { ButtonInverseStyled } from './ButtonInverseHover.styled';

export const ButtonInverseHover = ({ children, width, ml }) => {
  return (
    <ButtonInverseStyled width={width} ml={ml}>
      {children}
    </ButtonInverseStyled>
  );
};

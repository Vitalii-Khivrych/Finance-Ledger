import React from 'react';
import PropTypes from 'prop-types';

import { ButtonInverseStyled } from './ButtonInverseHover.styled';

export const ButtonInverseHover = ({ children, width, blue }) => {
  return (
    <ButtonInverseStyled width={width} blue={blue}>
      {children}
    </ButtonInverseStyled>
  );
};

ButtonInverseHover.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.string,
  blue: PropTypes.bool,
};

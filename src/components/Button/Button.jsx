import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from './Button.styled';

export const Button = ({ children, width, ml }) => {
  return (
    <ButtonStyled width={width} ml={ml}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.array.isRequired,
  width: PropTypes.string,
  ml: PropTypes.string,
};

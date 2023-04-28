import React from 'react';

import sprite from 'images/sprite.svg';
import { Svg } from './SvgIcon.styled';

export const SvgIcon = ({ id }) => {
  return (
    <Svg className={id} alt="website-logo">
      <use href={`${sprite}#${id}`}></use>
    </Svg>
  );
};

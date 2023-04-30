import React from 'react';

import { SvgIcon } from 'components';
import { TextWarning } from './WarningMessage.styled';

export const WarningMessage = () => {
  return (
    <TextWarning>
      <SvgIcon id={'icon-warning'} />
      This is a required field
    </TextWarning>
  );
};

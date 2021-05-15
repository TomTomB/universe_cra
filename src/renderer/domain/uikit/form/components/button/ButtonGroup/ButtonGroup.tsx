import * as E from './ButtonGroup.styles';
import React from 'react';
import type { ButtonGroupProps } from './ButtonGroup.types';
import type { FC } from 'react';

export const ButtonGroup: FC<ButtonGroupProps> = ({ children, className }) => {
  return (
    <E.StyledButtonGroup className={className}>{children}</E.StyledButtonGroup>
  );
};

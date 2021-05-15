import * as E from './FilterFader.styles';
import React from 'react';
import type { FC } from 'react';
import type { FilterFaderProps } from './FilterFader.types';

export const FilterFader: FC<FilterFaderProps> = ({ children, className }) => {
  return (
    <E.StyledFilterFader className={className}>
      {children}
      <E.Duplicate>{children}</E.Duplicate>
    </E.StyledFilterFader>
  );
};

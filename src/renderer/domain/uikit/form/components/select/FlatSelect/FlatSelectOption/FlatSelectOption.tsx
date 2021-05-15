import * as E from './FlatSelectOption.styles';
import React from 'react';
import type { FC } from 'react';
import type { FlatSelectOptionProps } from './FlatSelectOption.types';

export const FlatSelectOption: FC<FlatSelectOptionProps> = ({
  children,
  selected,
  disabled,
  index,
  onClick,
}) => {
  return (
    <E.StyledFlatSelectOption
      tabIndex={disabled ? -1 : 0}
      selected={selected}
      data-disabled={disabled}
      data-index={index}
      role="option"
      onClick={onClick}
    >
      {children}
    </E.StyledFlatSelectOption>
  );
};

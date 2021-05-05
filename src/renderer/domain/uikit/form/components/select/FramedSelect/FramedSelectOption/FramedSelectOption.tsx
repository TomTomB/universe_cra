import * as E from './FramedSelectOption.styles';
import React, { FC } from 'react';
import type { FramedSelectOptionProps } from './FramedSelectOption.types';

export const FramedSelectOption: FC<FramedSelectOptionProps> = ({
  index,
  children,
  selected,
  disabled,
  onClick,
}) => {
  return (
    <E.StyledFramedSelectOption
      tabIndex={disabled ? -1 : 0}
      selected={selected}
      data-disabled={disabled}
      data-index={index}
      role="option"
      onClick={onClick}
    >
      {children}
    </E.StyledFramedSelectOption>
  );
};

export default FramedSelectOption;

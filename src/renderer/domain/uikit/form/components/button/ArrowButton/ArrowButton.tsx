import * as E from './ArrowButton.styles';
import React, { FC } from 'react';
import type { ArrowButtonProps } from './ArrowButton.types';

export const ArrowButton: FC<ArrowButtonProps> = ({
  disabled,
  rotated,
  label,
  className,
  type,
  onClick,
}) => {
  return (
    <E.StyledArrowButton
      className={className}
      type={type}
      aria-label={label}
      disabled={disabled}
      rotated={rotated}
      onClick={onClick}
    >
      <E.Default />
      <E.Hover />
      <E.Click />
      <E.Disabled />
    </E.StyledArrowButton>
  );
};

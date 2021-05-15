import * as E from './CloseButton.styles';
import React from 'react';
import type { CloseButtonProps } from './CloseButton.types';
import type { FC } from 'react';

export const CloseButton: FC<CloseButtonProps> = ({
  btnStyle,
  type,
  className,
  disabled,
  label,
  onClick,
}) => {
  return (
    <E.StyledCloseButton
      aria-label={label}
      btnStyle={btnStyle}
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      <E.Contents>
        <E.CloseIcon btnStyle={btnStyle} />
      </E.Contents>
    </E.StyledCloseButton>
  );
};

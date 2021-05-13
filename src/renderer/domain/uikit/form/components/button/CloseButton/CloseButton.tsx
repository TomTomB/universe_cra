import * as E from './CloseButton.styles';
import React, { FC } from 'react';
import type { CloseButtonProps } from './CloseButton.types';

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

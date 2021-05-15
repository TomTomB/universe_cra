import * as E from './SecondaryFlatButton.styles';
import React from 'react';
import type { FC } from 'react';
import type { SecondaryFlatButtonProps } from './SecondaryFlatButton.types';

export const SecondaryFlatButton: FC<SecondaryFlatButtonProps> = ({
  children,
  className,
  type,
  disabled,
  onClick,
}) => {
  return (
    <E.StyledSecondaryFlatButton
      disabled={disabled}
      className={className}
      type={type}
      onClick={onClick}
    >
      <E.FrameContainer>
        <E.FrameDefault />
        <E.FrameHover />
        <E.FrameActive />
        <E.FrameDisabled />
      </E.FrameContainer>

      <E.Content> {children} </E.Content>
    </E.StyledSecondaryFlatButton>
  );
};

import * as E from './PrimaryReplayButton.styles';
import React from 'react';
import type { FC } from 'react';
import type { PrimaryReplayButtonProps } from './PrimaryReplayButton.types';

export const PrimaryReplayButton: FC<PrimaryReplayButtonProps> = ({
  disabled,
  className,
  onClick,
}) => {
  return (
    <E.StyledPrimaryReplayButton
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      <E.ButtonStateDefault />
      <E.ButtonStateHover />
      <E.ButtonStateActive />
    </E.StyledPrimaryReplayButton>
  );
};

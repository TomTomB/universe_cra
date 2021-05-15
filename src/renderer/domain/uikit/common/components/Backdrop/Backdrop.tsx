import * as E from './Backdrop.styles';
import React from 'react';
import type { BackdropProps } from './Backdrop.types';
import type { FC } from 'react';

export const Backdrop: FC<BackdropProps> = ({ className }) => {
  return <E.StyledBackdrop className={className} />;
};

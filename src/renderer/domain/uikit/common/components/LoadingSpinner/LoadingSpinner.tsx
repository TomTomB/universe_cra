import * as E from './LoadingSpinner.styles';
import React from 'react';
import type { FC } from 'react';
import type { LoadingSpinnerProps } from './LoadingSpinner.types';

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ isLarge }) => {
  return <E.StyledLoadingSpinner isLarge={isLarge} />;
};

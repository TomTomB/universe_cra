import * as E from './PendingBanner.styles';
import { Videos } from './assets';
import React from 'react';
import type { FC } from 'react';
import type { PendingBannerProps } from './PendingBanner.types';

export const PendingBanner: FC<PendingBannerProps> = ({ className }) => {
  return (
    <E.StyledPendingBanner
      className={className}
      src={Videos.invitedBanner}
      muted
      loop
      autoPlay
    />
  );
};

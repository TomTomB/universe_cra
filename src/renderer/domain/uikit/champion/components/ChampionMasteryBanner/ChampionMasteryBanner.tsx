import * as E from './ChampionMasteryBanner.styles';
import React from 'react';
import type { ChampionMasteryBannerProps } from './ChampionMasteryBanner.types';
import type { FC } from 'react';

export const ChampionMasteryBanner: FC<ChampionMasteryBannerProps> = ({
  level,
}) => {
  return (
    <E.StyledChampionMasteryBannerContainer>
      <E.StyledChampionMasteryBanner level={level} />
    </E.StyledChampionMasteryBannerContainer>
  );
};

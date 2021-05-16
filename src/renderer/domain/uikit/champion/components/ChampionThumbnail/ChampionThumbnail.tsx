import * as E from './ChampionThumbnail.styles';
import React from 'react';
import type { ChampionThumbnailProps } from './ChampionThumbnail.types';
import type { FC } from 'react';

export const ChampionThumbnail: FC<ChampionThumbnailProps> = ({
  className,
  masteryBanner,
  thumbnail,
  name,
  chestAcquired,

  simple,
  freeToPlay,
  freeToPlayReward,
  locked,
  rental,
}) => {
  return (
    <E.StyledChampionThumbnail className={className} data-name={name}>
      {masteryBanner}
      <E.ThumbnailSquare locked={locked}>{thumbnail}</E.ThumbnailSquare>
      {chestAcquired && (
        <E.ChampionAchievements>
          <E.ChestAcquiredFrame />
        </E.ChampionAchievements>
      )}
      {!simple && (
        <E.ChampionAvailability
          freeToPlay={freeToPlay}
          freeToPlayReward={freeToPlayReward}
          locked={locked}
          rental={rental}
        />
      )}
    </E.StyledChampionThumbnail>
  );
};

import * as E from './ChampionMasteryTooltip.styles';
import React from 'react';
import type { ChampionMasteryTooltipProps } from './ChampionMasteryTooltip.types';
import type { FC } from 'react';

export const ChampionMasteryTooltip: FC<ChampionMasteryTooltipProps> = ({
  championName,
  masteryPoints,
  masteryTitle,
  masteryLevel,
  masteryProgress,
  className,
  chestAcquired,
  displayAsCore,
}) => {
  return (
    <E.StyledChampionMasteryTooltip className={className}>
      <E.StyledRadialProgress
        progressType="blue"
        progress={masteryProgress}
        topLayerChildren={<E.ProgressText> {masteryLevel} </E.ProgressText>}
      ></E.StyledRadialProgress>
      <E.Info>
        <E.Name> {championName} </E.Name>
        <E.Separator />
        <E.Mastery>
          <E.MasteryScore> {masteryPoints} pts.</E.MasteryScore>
          <E.MasteryTitle>{masteryTitle}</E.MasteryTitle>
        </E.Mastery>
        <E.Chest chestAcquired={chestAcquired} asCore={displayAsCore}>
          <E.ChestStatus></E.ChestStatus>
        </E.Chest>
      </E.Info>
    </E.StyledChampionMasteryTooltip>
  );
};

import * as E from './ThemedLevelRing.styles';
import React from 'react';
import type { FC } from 'react';
import type { ThemedLevelRingProps } from './ThemedLevelRing.types';

export const ThemedLevelRing: FC<ThemedLevelRingProps> = ({
  className,
  ringType,
  progress,
  summonerLevel,
}) => {
  const themeLevel = Math.floor(summonerLevel / 25) + 1;

  return (
    <E.StyledThemedLevelRing
      ringTheme={themeLevel}
      ringType={ringType}
      progress={progress ?? 0}
      polygonConfig={{ startAngle: 247, endAngle: -67 }}
      className={className}
      bottomLayerChildren={
        ringType === 'progress' || ringType === 'simplified' ? (
          <E.UnfilledXpRing />
        ) : (
          <></>
        )
      }
      middleLayerChildren={
        <>
          <E.MaskContainerLeftHalf>
            <E.UnfilledXpRing />
          </E.MaskContainerLeftHalf>

          <E.MaskContainerRightHalf>
            <E.UnfilledXpRing />
          </E.MaskContainerRightHalf>
          <E.FilledXpRing />
        </>
      }
      topLayerChildren={
        <>
          <E.LevelRingBorder />
          {ringType !== 'simplified' && (
            <E.LevelText> {summonerLevel} </E.LevelText>
          )}
        </>
      }
    ></E.StyledThemedLevelRing>
  );
};

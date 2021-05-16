import { ChampionMasteryBannerStyles } from '../ChampionMasteryBanner';
import { Images } from './assets';
import { ThumbnailStyles } from '@universe/renderer/uikit/common';
import styled, { css } from 'styled-components';
import type { ChampionAvailabilityProps } from './ChampionThumbnail.types';

export const StyledChampionThumbnail = styled.div`
  font-kerning: normal;
  -webkit-font-feature-settings: 'kern' 1;
  color: #a09b8c;
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0.1em;
  -webkit-font-smoothing: subpixel-antialiased;
  position: relative;
  display: flex;
  flex-direction: column;

  &[data-name] ::after {
    white-space: nowrap;
    position: relative;
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    content: attr(name);
  }

  ${ChampionMasteryBannerStyles.StyledChampionMasteryBannerContainer} {
    margin: -100% 2px 0 2px;
  }
`;

export const ThumbnailSquare = styled.div<{ locked?: boolean }>`
  order: -1;
  position: relative;
  padding-bottom: 100%;

  ${ThumbnailStyles.StyledThumbnail} {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;

    img {
      width: calc(100% + 8px);
      height: calc(100% + 8px);
      margin: -4px;
      display: block;
    }
  }

  ${({ locked }) =>
    locked &&
    css`
      ${ThumbnailStyles.StyledThumbnail}:not(:hover) img {
        -webkit-filter: brightness(0.3);
      }
    `}
`;

export const ChampionAvailability = styled.div<ChampionAvailabilityProps>`
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  pointer-events: none;

  ${({ freeToPlayReward }) =>
    freeToPlayReward &&
    css`
      width: 27px;
      height: 32px;
      top: -10px;
      right: -13px;
      background-image: url(${Images.iconFreeToPlayReward});
    `}

  ${({ freeToPlay }) =>
    freeToPlay &&
    css`
      width: 38px;
      height: 38px;
      top: -12px;
      right: -18px;
      background-image: url(${Images.iconFreeToPlay});
    `}

  ${({ locked }) =>
    locked &&
    css`
      width: 100%;
      height: 30px;
      margin-top: 100%;
      top: -14px;
      left: 0;
      background-image: url(${Images.iconLockSmall});
    `}


  ${({ rental }) =>
    rental &&
    css`
      width: 43px;
      height: 43px;
      top: -14px;
      right: -21px;
      background-image: url(${Images.iconRental});
    `}
`;

export const ChampionAchievements = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
`;

export const ChestAcquiredFrame = styled.div`
  width: 75px;
  height: 75px;
  margin-top: -6px;
  margin-left: -4px;
  background: url(${Images.iconChestAcquiredFrame}) no-repeat center;
  background-size: contain;
`;

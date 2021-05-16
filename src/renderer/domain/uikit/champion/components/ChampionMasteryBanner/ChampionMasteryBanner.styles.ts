import { Images } from './assets';
import styled, { css, keyframes } from 'styled-components';
import type {
  ChampionMasteryLevel,
  StyledChampionMasteryBannerProps,
} from './ChampionMasteryBanner.types';

export const handleLevel = (level?: ChampionMasteryLevel) => {
  switch (level) {
    case undefined:
      return Images.masteryBannerLocked;
    case 0:
      return Images.masteryBanner0;
    case 1:
      return Images.masteryBanner1;
    case 2:
      return Images.masteryBanner2;
    case 3:
      return Images.masteryBanner3;
    case 4:
      return Images.masteryBanner4;
    case 5:
      return Images.masteryBanner5;
    case 6:
      return Images.masteryBanner6;
    case 7:
      return Images.masteryBanner7;
  }
};

export const StyledChampionMasteryBannerContainer = styled.div`
  position: relative;
  padding-bottom: 180%;
  overflow: hidden;
`;

export const bannerUnfurlAnimation = keyframes`
  from {
    opacity: 0;
    top: -8%;
  }
  to {
    opacity: 1;
    top: 0;
  }
`;

export const StyledChampionMasteryBanner = styled.div<StyledChampionMasteryBannerProps>`
  position: absolute;
  width: 100%;
  height: 124%;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% auto;
  animation: ${bannerUnfurlAnimation} 0.3s;
  background-image: url(${({ level }) => handleLevel(level)});

  ${({ level }) =>
    level === undefined &&
    css`
      -webkit-filter: brightness(0.65);
    `}
`;

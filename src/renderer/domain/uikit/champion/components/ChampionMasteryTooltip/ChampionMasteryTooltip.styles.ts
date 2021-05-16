import { Images } from './assets';
import { RadialProgress } from '@universe/renderer/uikit/common';
import styled, { css } from 'styled-components';

export const StyledChampionMasteryTooltip = styled.div`
  color: #a09b8c;
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0.025em;
  -webkit-font-smoothing: subpixel-antialiased;
  padding: 12px 18px 12px 12px;
  min-width: 255px;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
`;

export const Info = styled.div`
  flex: 1 1 auto;
`;

export const Name = styled.h4`
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.05em;
  margin: 0;
`;

export const Separator = styled.hr`
  display: block;
  border: none;
  height: 1px;
  margin: 0 40px 0 0;
  background-color: #463714;
`;

export const Mastery = styled.div`
  display: flex;
  margin: 3px 0 0 0;
`;

export const MasteryScore = styled.span`
  padding: 0 7px 0 23px;

  &::before {
    margin: 0 0 0 -25px;
    content: '';
    position: absolute;
    width: 17px;
    height: 14px;
    background: url(${Images.iconChampTooltipMastery}) center no-repeat;
    background-size: 100%;
  }
`;

export const MasteryTitle = styled.span`
  flex: 1 100%;
  text-align: right;
`;

export const ChestStatus = styled.span``;

export const Chest = styled.div<{ chestAcquired?: boolean; asCore?: boolean }>`
  display: none;

  ${({ chestAcquired }) =>
    chestAcquired &&
    css`
      display: block;
      padding: 0 0 0 23px;
    `}

  &::before {
    content: '';
    position: absolute;
    width: 21px;
    height: 14px;
    background-size: 100%;
    margin-left: -24px;
    background-repeat: no-repeat;
    background-position: center;

    ${({ asCore }) =>
      asCore
        ? css`
            background-image: url(${Images.coreAcquired});
          `
        : css`
            background-image: url(${Images.chestAcquired});
          `}
  }
`;

export const StyledRadialProgress = styled(RadialProgress)`
  flex: 0 0 auto;
  width: 44px;
  height: 44px;
  margin: 0 16px 0 0;
`;

export const ProgressText = styled.h4`
  margin: 0;
  text-align: center;
  line-height: 44px;
`;

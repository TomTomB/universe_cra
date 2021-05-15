import {
  emptyMeterBlue,
  emptyMeterChampion,
  emptyMeterPink,
  emptyMeterSummoner,
  fullMeterBlue,
  fullMeterChampion,
  fullMeterPink,
  fullMeterSummoner,
} from './assets/images';
import styled, { css } from 'styled-components';
import type {
  RadialProgressType,
  StyledRadialProgressProps,
} from './RadialProgress.types';

export const Layer = styled.div<{ path?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
`;

export const TopLayer = styled(Layer)``;

export const MiddleLayer = styled(Layer)`
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;

  clip-path: ${({ path }) => path};
`;

export const BottomLayer = styled(Layer)`
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const getLayerConfig = (type?: RadialProgressType) => {
  switch (type) {
    case 'blue':
      return css`
        ${BottomLayer} {
          background-image: url(${emptyMeterBlue});
        }
        ${MiddleLayer} {
          background-image: url(${fullMeterBlue});
        }
      `;

    case 'champion':
      return css`
        ${BottomLayer} {
          background-image: url(${emptyMeterChampion});
        }
        ${MiddleLayer} {
          background-image: url(${fullMeterChampion});
        }
      `;

    case 'pink':
      return css`
        ${BottomLayer} {
          background-image: url(${emptyMeterPink});
        }
        ${MiddleLayer} {
          background-image: url(${fullMeterPink});
        }
      `;
    case 'summoner':
      return css`
        ${BottomLayer} {
          background-image: url(${emptyMeterSummoner});
        }
        ${MiddleLayer} {
          background-image: url(${fullMeterSummoner});
        }
      `;

    default:
      return css``;
  }
};

export const StyledRadialProgress = styled.div<StyledRadialProgressProps>`
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 10px;
  min-height: 10px;
  margin: 0;
  padding: 0;
  border: 0;

  ${({ progressType }) => getLayerConfig(progressType)}
`;

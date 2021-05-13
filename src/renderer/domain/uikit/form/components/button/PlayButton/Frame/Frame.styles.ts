import styled, { css } from 'styled-components';
import { Animation } from '@universe/renderer/uikit/form';
import PlayButtonFrameImage from './assets/images/play-button-frame-default.png';

export const Frame = styled.div<{ show: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${PlayButtonFrameImage});
  transition: 400ms background ease;
  opacity: 0;

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
    `}
`;

export const FrameAnimation = styled(Animation)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

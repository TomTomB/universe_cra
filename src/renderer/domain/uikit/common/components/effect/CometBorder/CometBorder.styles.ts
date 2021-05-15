import styled, { keyframes } from 'styled-components';
import type { CometBorderProps } from './CometBorder.types';

export const cometAnimation = keyframes`
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(
      calc(var(--height) + var(--width) - var(--border-width) * 2)
    );
  }
`;

export const Glow = styled.div`
  height: 100%;
  -webkit-filter: drop-shadow(0 0 1px var(--comet-color))
    drop-shadow(0 0 1px var(--comet-color));
`;

export const Side = styled.div`
  overflow: hidden;
  position: absolute;
`;

export const Top = styled(Side)`
  height: var(--border-width);
  width: calc(100% + var(--border-width));
  left: calc(var(--border-width) * -1);
  top: calc(var(--border-width) * -1);
`;

export const Bottom = styled(Side)`
  height: var(--border-width);
  width: calc(100% + var(--border-width));
  bottom: calc(0px - var(--border-width));
  transform: rotate(180deg);
`;

export const Left = styled(Side)`
  height: var(--border-width);
  width: calc(var(--height) - var(--border-width));
  right: calc(100% + var(--border-width) * 1);
  transform: rotate(270deg);
  transform-origin: 100% 0;
`;

export const Right = styled(Side)`
  height: var(--border-width);
  width: calc(var(--height) - var(--border-width));
  left: 100%;
  top: calc(0% + var(--border-width) * -2);
  transform: rotate(90deg);
  transform-origin: 0 100%;
`;

export const Comet = styled.div`
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-name: ${cometAnimation};
  animation-timing-function: linear;
  background-image: repeating-linear-gradient(
    270deg,
    transparent 0,
    var(--comet-color) 2px,
    transparent var(--comet-length),
    transparent calc(var(--width) + var(--height) - var(--border-width) * 2)
  );
  height: 100%;
  position: absolute;
  width: calc(var(--width) + var(--height) + var(--comet-length));
`;

export const TopComet = styled(Comet)`
  left: calc(var(--comet-length) * -1);
`;

export const BottomComet = styled(Comet)`
  left: calc(var(--comet-length) * -1);
`;

export const LeftComet = styled(Comet)`
  right: 0;
`;

export const RightComet = styled(Comet)`
  right: 0;
`;

export const StyledCometBorder = styled.div<CometBorderProps>`
  --border-color: ${({ borderColor }) => borderColor};
  --border-width: ${({ borderWith }) => borderWith}px;
  --comet-color: ${({ cometColor }) => cometColor};
  --comet-length: ${({ cometLength }) => cometLength}px;
  --height: ${({ height }) => height}px;
  --width: ${({ width }) => width}px;

  border: var(--border-width) solid var(--border-color);
  height: var(--height);
  width: var(--width);
`;

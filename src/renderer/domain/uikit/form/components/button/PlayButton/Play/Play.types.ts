import type { PlayButtonState } from '../PlayButton.types';

export interface PlayContainerProps {
  show: boolean;
  instant: boolean;
}

export interface PlayButtonPlayProps {
  buttonState: { prev: PlayButtonState; curr: PlayButtonState };
  disabled: boolean;
  isHovering: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;

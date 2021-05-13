import type { PlayButtonState } from '../PlayButton.types';

export interface PlayButtonLogoProps {
  buttonState: { prev: PlayButtonState; curr: PlayButtonState };
  playPatcherIntro: boolean;
}

export enum LogoAnim {
  INTRO,
  IDLE,
  ACTIVE,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;

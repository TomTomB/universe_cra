import type { PlayButtonState } from '../PlayButton.types';

export interface PlayButtonFrameProps {
  buttonState: { prev: PlayButtonState; curr: PlayButtonState };
  playPatcherIntro: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;

import type { DownloadProgress } from '@universe/types/electron';
import type { PlayButtonState } from '../PlayButton.types';

export interface PlayButtonPatcherProps {
  buttonState: { prev: PlayButtonState; curr: PlayButtonState };
  playPatcherIntro: boolean;
  downloadProgress?: DownloadProgress | null;
}

export interface ProgressContainerProps {
  show: boolean;
  showWithIntro: boolean;
  delay: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;

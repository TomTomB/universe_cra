import type { PlayButtonState } from '../PlayButton.types';

export interface LobbyContainerProps {
  show: boolean;
  instant: boolean;
}

export interface PlayButtonLobbyProps {
  buttonState: { prev: PlayButtonState; curr: PlayButtonState };
  disabled: boolean;
  isHovering: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SNOWPACK = true;

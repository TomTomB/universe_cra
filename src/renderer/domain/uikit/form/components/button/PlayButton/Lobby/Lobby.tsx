import * as E from './Lobby.styles';
import React, { FC, useEffect, useRef } from 'react';
import LobbyHoverIntro from './assets/video/lobby-button-hover-intro.webm';
import LobbyHoverLoop from './assets/video/lobby-button-hover-loop.webm';
import LobbyHoverOutro from './assets/video/lobby-button-hover-outro.webm';
import LobbyIntro from './assets/video/lobby-button-intro.webm';
import LobbyMagicRelease from './assets/video/lobby-button-magic-release.webm';
import LobbyRelease from './assets/video/lobby-button-release.webm';
import type { PlayButtonLobbyProps } from './Lobby.types';
import { PlayButtonState } from '../PlayButton.types';
import { useCompare } from '@universe/renderer/uikit/core';

export const PlayButtonLobby: FC<PlayButtonLobbyProps> = ({
  buttonState,
  disabled,
  isHovering,
}) => {
  const lobbyHoverIntroElem = useRef<HTMLVideoElement>(null);
  const lobbyHoverLoopElem = useRef<HTMLVideoElement>(null);
  const lobbyHoverOutroElem = useRef<HTMLVideoElement>(null);
  const lobbyIntroElem = useRef<HTMLVideoElement>(null);
  const lobbyMagicReleaseElem = useRef<HTMLVideoElement>(null);
  const lobbyReleaseElem = useRef<HTMLVideoElement>(null);

  const hasButtonStateChanged = useCompare(buttonState.curr);

  useEffect(() => {
    if (!hasButtonStateChanged) {
      return;
    }

    switch (buttonState.curr) {
      case PlayButtonState.PATCHER:
        break;

      case PlayButtonState.PLAY:
        break;

      case PlayButtonState.PLAY_DISABLED:
        break;

      case PlayButtonState.LOBBY:
        if (buttonState.prev === PlayButtonState.LOBBY_DISABLED) {
          lobbyIntroElem.current!.currentTime = 0;
          lobbyIntroElem.current!.play();
        }
        break;

      case PlayButtonState.LOBBY_DISABLED:
        if (buttonState.prev === PlayButtonState.LOBBY) {
          lobbyMagicReleaseElem.current!.currentTime = 0;
          lobbyMagicReleaseElem.current!.play();

          lobbyReleaseElem.current!.currentTime = 0;
          lobbyReleaseElem.current!.play();
        }
        break;

      case PlayButtonState.HIDDEN:
      default:
        break;
    }
  }, [hasButtonStateChanged, buttonState, disabled]);

  useEffect(() => {
    if (isHovering) {
      lobbyHoverIntroElem.current!.currentTime = 0;
      lobbyHoverIntroElem.current!.play();
    }
  }, [isHovering]);

  return (
    <E.LobbyContainer
      show={
        buttonState.curr === PlayButtonState.LOBBY ||
        buttonState.curr === PlayButtonState.LOBBY_DISABLED
      }
      instant={
        buttonState.curr === PlayButtonState.LOBBY_DISABLED &&
        buttonState.prev === PlayButtonState.PLAY_DISABLED
      }
    >
      <E.LobbyAnimationWithoutTransition
        muted
        show={
          buttonState.prev === PlayButtonState.LOBBY_DISABLED &&
          buttonState.curr === PlayButtonState.LOBBY
        }
        src={LobbyIntro}
        ref={lobbyIntroElem}
      />

      <E.LobbyAnimation
        muted
        show={isHovering}
        src={LobbyHoverIntro}
        ref={lobbyHoverIntroElem}
      />

      <E.LobbyAnimation
        show={isHovering}
        src={LobbyHoverLoop}
        autoPlay
        muted
        loop
        ref={lobbyHoverLoopElem}
      />

      {/* TODO(TRB): Implement */}
      <E.LobbyAnimation
        muted
        show={false}
        src={LobbyHoverOutro}
        ref={lobbyHoverOutroElem}
      />

      <E.LobbyAnimationWithoutTransition
        show={
          buttonState.curr === PlayButtonState.LOBBY_DISABLED &&
          (buttonState.prev === PlayButtonState.LOBBY ||
            buttonState.prev === PlayButtonState.PLAY_DISABLED)
        }
        autoPlay
        muted
        src={LobbyRelease}
        ref={lobbyReleaseElem}
      />

      <E.LobbyAnimationWithoutTransition
        show={
          buttonState.curr === PlayButtonState.LOBBY_DISABLED &&
          (buttonState.prev === PlayButtonState.LOBBY ||
            buttonState.prev === PlayButtonState.PLAY_DISABLED)
        }
        autoPlay
        muted
        src={LobbyMagicRelease}
        ref={lobbyMagicReleaseElem}
      />
    </E.LobbyContainer>
  );
};

import * as E from './Lobby.styles';
import { PlayButtonState } from '../PlayButton.types';
import { Videos } from './assets';
import { useCompare } from '@universe/renderer/uikit/core';
import React, { useEffect, useRef } from 'react';
import type { FC } from 'react';
import type { PlayButtonLobbyProps } from './Lobby.types';

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

    if (
      !lobbyIntroElem.current ||
      !lobbyMagicReleaseElem.current ||
      !lobbyReleaseElem.current
    ) {
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
          lobbyIntroElem.current.currentTime = 0;
          lobbyIntroElem.current.play();
        }
        break;

      case PlayButtonState.LOBBY_DISABLED:
        if (buttonState.prev === PlayButtonState.LOBBY) {
          lobbyMagicReleaseElem.current.currentTime = 0;
          lobbyMagicReleaseElem.current.play();

          lobbyReleaseElem.current.currentTime = 0;
          lobbyReleaseElem.current.play();
        }
        break;

      case PlayButtonState.HIDDEN:
      default:
        break;
    }
  }, [hasButtonStateChanged, buttonState, disabled]);

  useEffect(() => {
    if (!lobbyHoverIntroElem.current) {
      return;
    }

    if (isHovering) {
      lobbyHoverIntroElem.current.currentTime = 0;
      lobbyHoverIntroElem.current.play();
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
        src={Videos.lobbyIntro}
        ref={lobbyIntroElem}
      />

      <E.LobbyAnimation
        muted
        show={isHovering}
        src={Videos.lobbyHoverIntro}
        ref={lobbyHoverIntroElem}
      />

      <E.LobbyAnimation
        show={isHovering}
        src={Videos.lobbyHoverLoop}
        autoPlay
        muted
        loop
        ref={lobbyHoverLoopElem}
      />

      {/* TODO(TRB): Implement */}
      <E.LobbyAnimation
        muted
        show={false}
        src={Videos.lobbyHoverOutro}
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
        src={Videos.lobbyRelease}
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
        src={Videos.lobbyMagicRelease}
        ref={lobbyMagicReleaseElem}
      />
    </E.LobbyContainer>
  );
};

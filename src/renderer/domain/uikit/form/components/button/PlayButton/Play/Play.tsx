import * as E from './Play.styles';
import { PlayButtonState } from '../PlayButton.types';
import { Videos } from './assets';
import { useCompare } from '@universe/renderer/uikit/core';
import React, { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import type { PlayButtonPlayProps } from './Play.types';

export const PlayButtonPlay: FC<PlayButtonPlayProps> = ({
  buttonState,
  disabled,
  isHovering,
}) => {
  const patcherToPlayElem = useRef<HTMLVideoElement>(null);
  const lobbyToPlayElem = useRef<HTMLVideoElement>(null);

  const playEnabledIntroElem = useRef<HTMLVideoElement>(null);
  const playHoverIntroElem = useRef<HTMLVideoElement>(null);
  const playHoverLoopElem = useRef<HTMLVideoElement>(null);
  const playHoverOutroElem = useRef<HTMLVideoElement>(null);
  const playReleaseElem = useRef<HTMLVideoElement>(null);
  const playReleaseMagicElem = useRef<HTMLVideoElement>(null);

  const hasButtonStateChanged = useCompare(buttonState.curr);

  const [showPatcherToPlay, setShowPatcherToPlay] = useState(false);
  const [showLobbyToPlay, setShowLobbyToPlay] = useState(false);
  const [transitionToPlayEnded, setTransitionToPlayEnded] = useState(false);

  useEffect(() => {
    if (!hasButtonStateChanged) {
      return;
    }

    if (
      !patcherToPlayElem.current ||
      !playEnabledIntroElem.current ||
      !lobbyToPlayElem.current ||
      !playReleaseElem.current ||
      !playReleaseMagicElem.current
    ) {
      return;
    }

    switch (buttonState.curr) {
      case PlayButtonState.PATCHER:
        setTransitionToPlayEnded(false);
        setShowPatcherToPlay(false);
        break;

      case PlayButtonState.PLAY:
        if (buttonState.prev === PlayButtonState.PATCHER && !disabled) {
          setShowPatcherToPlay(true);
          patcherToPlayElem.current.currentTime = 0;
          patcherToPlayElem.current.play();
        } else if (buttonState.prev === PlayButtonState.PLAY_DISABLED) {
          playEnabledIntroElem.current.currentTime = 0;
          playEnabledIntroElem.current.play();
        } else if (
          buttonState.prev === PlayButtonState.LOBBY_DISABLED ||
          buttonState.prev === PlayButtonState.LOBBY
        ) {
          setShowLobbyToPlay(true);
          lobbyToPlayElem.current.currentTime = 0;
          lobbyToPlayElem.current.play();
        }

        break;

      case PlayButtonState.PLAY_DISABLED:
        if (buttonState.prev === PlayButtonState.PLAY) {
          playReleaseElem.current.currentTime = 0;
          playReleaseElem.current.play();
          playReleaseMagicElem.current.currentTime = 0;
          playReleaseMagicElem.current.play();
        }

        break;

      case PlayButtonState.LOBBY:
        break;

      case PlayButtonState.LOBBY_DISABLED:
        break;

      case PlayButtonState.HIDDEN:
      default:
        setTransitionToPlayEnded(false);
        setShowPatcherToPlay(false);
        break;
    }
  }, [hasButtonStateChanged, buttonState, disabled]);

  useEffect(() => {
    if (!playHoverIntroElem.current) {
      return;
    }

    if (isHovering) {
      playHoverIntroElem.current.currentTime = 0;
      playHoverIntroElem.current.play();
    }
  }, [isHovering]);

  return (
    <E.PlayContainer
      show={
        buttonState.curr === PlayButtonState.PLAY ||
        buttonState.curr === PlayButtonState.PLAY_DISABLED
      }
      instant={
        buttonState.curr === PlayButtonState.PLAY_DISABLED &&
        buttonState.prev === PlayButtonState.LOBBY_DISABLED
      }
    >
      <E.PatcherToPlayAnimation
        show={showPatcherToPlay}
        src={Videos.patcherToPlay}
        ref={patcherToPlayElem}
        muted
        onEnded={() => {
          if (buttonState.curr === PlayButtonState.HIDDEN) {
            return;
          }
          setTransitionToPlayEnded(true);
          setShowPatcherToPlay(false);
        }}
      />

      <E.PlayAnimation
        show={showLobbyToPlay}
        src={Videos.lobbyToPlay}
        ref={lobbyToPlayElem}
        muted
        onEnded={() => {
          if (buttonState.curr === PlayButtonState.HIDDEN) {
            return;
          }
          setTransitionToPlayEnded(true);
          setShowLobbyToPlay(false);
        }}
      />

      <E.PlayAnimation
        show={
          (transitionToPlayEnded ||
            buttonState.prev !== PlayButtonState.PATCHER) &&
          buttonState.curr !== PlayButtonState.PLAY_DISABLED &&
          !showLobbyToPlay
        }
        muted
        src={Videos.playButtonEnabledIntro}
        ref={playEnabledIntroElem}
        autoPlay
      />

      <E.PlayAnimation
        show={isHovering}
        src={Videos.playButtonHoverIntro}
        ref={playHoverIntroElem}
        muted
      />

      <E.PlayAnimation
        show={isHovering}
        src={Videos.playButtonHoverLoop}
        autoPlay
        loop
        muted
        ref={playHoverLoopElem}
      />

      {/* TODO(TRB): Implement */}
      <E.PlayAnimation
        show={false}
        src={Videos.playButtonHoverOutro}
        ref={playHoverOutroElem}
        muted
      />

      <E.PlayAnimationWithoutTransition
        show={buttonState.curr === PlayButtonState.PLAY_DISABLED}
        src={Videos.playButtonRelease}
        ref={playReleaseElem}
        muted
      />

      <E.PlayAnimationWithoutTransition
        show={buttonState.curr === PlayButtonState.PLAY_DISABLED}
        src={Videos.playButtonMagicRelease}
        ref={playReleaseMagicElem}
        muted
      />
    </E.PlayContainer>
  );
};

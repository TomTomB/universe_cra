import * as E from './Play.styles';
import { PlayButtonState } from '../PlayButton.types';
import { useCompare } from '@universe/renderer/uikit/core';
import LobbyToPlay from './assets/video/lobby-button-to-play-button.webm';
import PatcherToPlay from './assets/video/patcher-to-play-button-enabled.webm';
import PlayButtonEnabledIntro from './assets/video/play-button-enabled-intro.webm';
import PlayButtonHoverIntro from './assets/video/play-button-hover-intro.webm';
import PlayButtonHoverLoop from './assets/video/play-button-hover-loop.webm';
import PlayButtonHoverOutro from './assets/video/play-button-hover-outro.webm';
import PlayButtonMagicRelease from './assets/video/play-button-magic-release.webm';
import PlayButtonRelease from './assets/video/play-button-release.webm';
import React, { FC, useEffect, useRef, useState } from 'react';
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

    switch (buttonState.curr) {
      case PlayButtonState.PATCHER:
        setTransitionToPlayEnded(false);
        setShowPatcherToPlay(false);
        break;

      case PlayButtonState.PLAY:
        if (buttonState.prev === PlayButtonState.PATCHER && !disabled) {
          setShowPatcherToPlay(true);
          patcherToPlayElem.current!.currentTime = 0;
          patcherToPlayElem.current!.play();
        } else if (buttonState.prev === PlayButtonState.PLAY_DISABLED) {
          playEnabledIntroElem.current!.currentTime = 0;
          playEnabledIntroElem.current!.play();
        } else if (
          buttonState.prev === PlayButtonState.LOBBY_DISABLED ||
          buttonState.prev === PlayButtonState.LOBBY
        ) {
          setShowLobbyToPlay(true);
          lobbyToPlayElem.current!.currentTime = 0;
          lobbyToPlayElem.current!.play();
        }

        break;

      case PlayButtonState.PLAY_DISABLED:
        if (buttonState.prev === PlayButtonState.PLAY) {
          playReleaseElem.current!.currentTime = 0;
          playReleaseElem.current!.play();
          playReleaseMagicElem.current!.currentTime = 0;
          playReleaseMagicElem.current!.play();
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
    if (isHovering) {
      playHoverIntroElem.current!.currentTime = 0;
      playHoverIntroElem.current!.play();
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
        src={PatcherToPlay}
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
        src={LobbyToPlay}
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
        src={PlayButtonEnabledIntro}
        ref={playEnabledIntroElem}
        autoPlay
      />

      <E.PlayAnimation
        show={isHovering}
        src={PlayButtonHoverIntro}
        ref={playHoverIntroElem}
        muted
      />

      <E.PlayAnimation
        show={isHovering}
        src={PlayButtonHoverLoop}
        autoPlay
        loop
        muted
        ref={playHoverLoopElem}
      />

      {/* TODO(TRB): Implement */}
      <E.PlayAnimation
        show={false}
        src={PlayButtonHoverOutro}
        ref={playHoverOutroElem}
        muted
      />

      <E.PlayAnimationWithoutTransition
        show={buttonState.curr === PlayButtonState.PLAY_DISABLED}
        src={PlayButtonRelease}
        ref={playReleaseElem}
        muted
      />

      <E.PlayAnimationWithoutTransition
        show={buttonState.curr === PlayButtonState.PLAY_DISABLED}
        src={PlayButtonMagicRelease}
        ref={playReleaseMagicElem}
        muted
      />
    </E.PlayContainer>
  );
};

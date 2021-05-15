import * as E from './Patcher.styles';
import { PlayButtonState } from '../PlayButton.types';
import { useCompare } from '@universe/renderer/uikit/core';
import ProgressBarBorderLoop from './assets/video/progress-bar-border-loop.webm';
import ProgressBarMainLoop from './assets/video/progress-bar-main-loop.webm';
import ProgressBarTipIntro from './assets/video/progress-bar-tip-intro.webm';
import ProgressBarTipLoop from './assets/video//progress-bar-tip-loop.webm';
import React, { FC, useEffect, useRef } from 'react';
import type { PlayButtonPatcherProps } from './Patcher.types';

export const PlayButtonPatcher: FC<PlayButtonPatcherProps> = ({
  playPatcherIntro,
  buttonState,
  downloadProgress,
}) => {
  const patcherBorderLoopAnim = useRef<HTMLVideoElement>(null);
  const patcherFillLoopAnim = useRef<HTMLVideoElement>(null);
  const patcherTipIntroAnim = useRef<HTMLVideoElement>(null);
  const patcherTipLoopAnim = useRef<HTMLVideoElement>(null);

  const hasButtonStateChanged = useCompare(buttonState.curr);

  const currentDownloadPercentage = downloadProgress?.percent ?? 0;

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
        break;

      case PlayButtonState.LOBBY_DISABLED:
        break;

      case PlayButtonState.HIDDEN:
      default:
        break;
    }
  }, [hasButtonStateChanged, playPatcherIntro, buttonState]);

  return (
    <E.ProgressContainer
      show={!playPatcherIntro && buttonState.curr === PlayButtonState.PATCHER}
      showWithIntro={playPatcherIntro}
      delay={playPatcherIntro ? 500 : 0}
    >
      <E.ProgressBarContainer
        style={{
          width: `${120 * (currentDownloadPercentage / 100)}px`,
        }}
      >
        <E.ProgressBarMainLoopAnimation
          src={ProgressBarMainLoop}
          show={true}
          loop
          autoPlay
          muted
          ref={patcherFillLoopAnim}
        />
      </E.ProgressBarContainer>

      {/* TODO(TRB): Implement */}
      <E.ProgressBarTipLoopAnimation
        src={ProgressBarTipIntro}
        show={false}
        muted
        ref={patcherTipIntroAnim}
      />

      <E.ProgressBarTipLoopAnimation
        src={ProgressBarTipLoop}
        show={119 * (currentDownloadPercentage / 100) - 94 > -86}
        style={{
          left: `${119 * (currentDownloadPercentage / 100) - 94}px`,
        }}
        loop
        autoPlay
        muted
        ref={patcherTipLoopAnim}
      />

      <E.ProgressBarBorderAnimation
        src={ProgressBarBorderLoop}
        show={true}
        loop
        autoPlay
        muted
        ref={patcherBorderLoopAnim}
      />
    </E.ProgressContainer>
  );
};

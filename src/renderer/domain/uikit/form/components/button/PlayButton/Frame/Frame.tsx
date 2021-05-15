import * as E from './Frame.styles';
import { PlayButtonState } from '../PlayButton.types';
import { useCompare } from '@universe/renderer/uikit/core';
import PatcherFrameIntro from './assets/video/patcher-frame-intro.webm';
import React, { FC, useEffect, useRef, useState } from 'react';
import type { PlayButtonFrameProps } from './Frame.types';

export const PlayButtonFrame: FC<PlayButtonFrameProps> = ({
  playPatcherIntro,
  buttonState,
}) => {
  const patcherFrameIntroAnim = useRef<HTMLVideoElement>(null);

  const [patcherFrameIntroEnded, setPatcherFrameIntroEnded] = useState(false);

  const hasButtonStateChanged = useCompare(buttonState.curr);

  useEffect(() => {
    if (!hasButtonStateChanged) {
      return;
    }

    if (!patcherFrameIntroAnim.current) {
      return;
    }

    switch (buttonState.curr) {
      case PlayButtonState.PATCHER:
        if (playPatcherIntro && buttonState.prev === PlayButtonState.HIDDEN) {
          patcherFrameIntroAnim.current.currentTime = 0;
          patcherFrameIntroAnim.current.play();
        }

        break;

      case PlayButtonState.PLAY:
        break;

      case PlayButtonState.LOBBY:
        break;

      case PlayButtonState.HIDDEN:
      default:
        setPatcherFrameIntroEnded(false);

        break;
    }
  }, [playPatcherIntro, buttonState, hasButtonStateChanged]);

  return (
    <>
      <E.Frame
        show={
          (patcherFrameIntroEnded || !playPatcherIntro) &&
          buttonState.curr !== PlayButtonState.HIDDEN
        }
      />
      <E.FrameAnimation
        show={playPatcherIntro && !patcherFrameIntroEnded}
        src={PatcherFrameIntro}
        ref={patcherFrameIntroAnim}
        muted
        onEnded={() => {
          if (buttonState.curr === PlayButtonState.HIDDEN) {
            return;
          }
          setPatcherFrameIntroEnded(true);
        }}
      />
    </>
  );
};

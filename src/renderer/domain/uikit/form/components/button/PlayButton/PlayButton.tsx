import * as E from './PlayButton.styles';
import { PlayButtonFrame } from './Frame';
import { PlayButtonLobby } from './Lobby';
import { PlayButtonLogo } from './Logo';
import { PlayButtonPatcher } from './Patcher';
import { PlayButtonPlay } from './Play';
import { PlayButtonProps, PlayButtonState } from './PlayButton.types';
import React, { FC, PropsWithChildren, useState } from 'react';

export const PlayButton: FC<PropsWithChildren<PlayButtonProps>> = ({
  type,
  children,
  className,
  disabled,
  onClick,
  buttonState,
  prevButtonState,
  downloadProgress,
}) => {
  const btnIsDisabled =
    disabled ||
    buttonState === PlayButtonState.PATCHER ||
    buttonState === PlayButtonState.HIDDEN ||
    buttonState === PlayButtonState.PLAY_DISABLED ||
    buttonState === PlayButtonState.LOBBY_DISABLED;

  const playPatcherIntro =
    buttonState === PlayButtonState.PATCHER &&
    prevButtonState === PlayButtonState.HIDDEN;

  const [isHovering, setIsHovering] = useState(false);

  return (
    <E.StyledPlayButton
      className={className}
      show={buttonState !== PlayButtonState.HIDDEN}
    >
      <PlayButtonFrame
        playPatcherIntro={playPatcherIntro}
        buttonState={{ prev: prevButtonState, curr: buttonState }}
      />
      <E.PlayButtonContainer>
        <E.LeagueLogoContainer>
          <PlayButtonLogo
            playPatcherIntro={playPatcherIntro}
            buttonState={{ prev: prevButtonState, curr: buttonState }}
          />
        </E.LeagueLogoContainer>
        <E.ButtonContainer
          onClick={onClick}
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
          disabled={btnIsDisabled}
          type={type}
        >
          <PlayButtonPlay
            buttonState={{ prev: prevButtonState, curr: buttonState }}
            disabled={btnIsDisabled}
            isHovering={isHovering}
          />

          <PlayButtonLobby
            buttonState={{ prev: prevButtonState, curr: buttonState }}
            disabled={btnIsDisabled}
            isHovering={isHovering}
          />

          <PlayButtonPatcher
            playPatcherIntro={playPatcherIntro}
            buttonState={{ prev: prevButtonState, curr: buttonState }}
            downloadProgress={downloadProgress}
          />

          <E.ContentContainer>
            <E.ButtonText
              intro={playPatcherIntro}
              patching={buttonState === PlayButtonState.PATCHER}
              reserveSpace={
                buttonState === PlayButtonState.PLAY ||
                buttonState === PlayButtonState.PLAY_DISABLED
              }
            >
              {children}
            </E.ButtonText>
          </E.ContentContainer>
        </E.ButtonContainer>
      </E.PlayButtonContainer>
    </E.StyledPlayButton>
  );
};

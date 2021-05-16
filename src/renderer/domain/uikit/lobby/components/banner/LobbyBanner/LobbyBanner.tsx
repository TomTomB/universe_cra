import * as E from './LobbyBanner.styles';
import { Banner } from '@universe/renderer/uikit/common';
import { Videos } from './assets';
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import type { FC } from 'react';
import type { LobbyBannerProps } from './LobbyBanner.types';

export const LobbyBanner: FC<LobbyBannerProps> = ({
  rank,
  showPattern,
  bannerType = 'primary',
  playIntro = true,
}) => {
  const bannerIntroRef = useRef<HTMLVideoElement>(null);

  const [introTimeElapsed, setIntroTimeElapsed] = useState(false);
  const [introTimeElapsedTimeout, setIntroTimeElapsedTimeout] =
    useState<number | null>(null);

  const [introState, setIntroState] =
    useState<'LOADING' | 'LOADED' | 'PLAYING' | 'ENDED'>('LOADING');

  useEffect(() => {
    if (!bannerIntroRef.current) {
      return;
    }

    if (introState === 'LOADED') {
      if (playIntro) {
        bannerIntroRef.current.currentTime = 0;
        bannerIntroRef.current.play();
        const timeout = window.setTimeout(() => {
          setIntroTimeElapsed(true);
          setIntroTimeElapsedTimeout(null);
        }, 400);
        setIntroTimeElapsedTimeout(timeout);
        setIntroState('PLAYING');
      } else if (!introTimeElapsedTimeout) {
        const timeout = window.setTimeout(() => {
          setIntroTimeElapsed(true);
          setIntroTimeElapsedTimeout(null);
        }, 100);
        setIntroTimeElapsedTimeout(timeout);
      }
    } else if (introState === 'ENDED') {
      bannerIntroRef.current.currentTime = 0;
    }

    return () => {
      if (introTimeElapsedTimeout) {
        window.clearTimeout(introTimeElapsedTimeout);
      }
    };
  }, [introState, bannerIntroRef, introTimeElapsedTimeout, playIntro]);

  return (
    <E.StyledSummonerBanner className={bannerType}>
      <E.FadeCondition className={classNames({ show: introTimeElapsed })}>
        <Banner rank={rank} showPattern={showPattern} />
      </E.FadeCondition>

      <E.FadeCondition
        className={classNames({ show: !!playIntro && introState !== 'ENDED' })}
      >
        <E.IntroVideo
          src={
            bannerType === 'primary'
              ? Videos.bannerPrimaryIntro
              : Videos.bannerPrimaryIntro
          }
          onLoadedData={() => setIntroState('LOADED')}
          onEnded={() => setIntroState('ENDED')}
          muted
          ref={bannerIntroRef}
        />
      </E.FadeCondition>
    </E.StyledSummonerBanner>
  );
};

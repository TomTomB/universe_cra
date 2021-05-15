import * as E from './AnimatedBorderOverlay.styles';
import React, { FC } from 'react';
import type { AnimatedBorderOverlayProps } from './AnimatedBorderOverlay.types';

export const AnimatedBorderOverlay: FC<AnimatedBorderOverlayProps> = ({
  speed = 25000,
  className,
}) => {
  return (
    <E.AnimatedBorderWrapper className={className}>
      <E.BorderContainer>
        <E.BlurEffectHigh>
          <E.GlowMaskTop>
            <E.GlowContent speed={speed} className="scroll top" />
            <E.GlowContent speed={speed} className="overlay top" />
          </E.GlowMaskTop>
          <E.GlowMaskRight>
            <E.GlowContent speed={speed} className="scroll right" />
            <E.GlowContent speed={speed} className="overlay right" />
          </E.GlowMaskRight>
          <E.GlowMaskBottom>
            <E.GlowContent speed={speed} className="scroll bottom" />
            <E.GlowContent speed={speed} className="overlay bottom" />
          </E.GlowMaskBottom>
          <E.GlowMaskLeft>
            <E.GlowContent speed={speed} className="scroll left" />
            <E.GlowContent speed={speed} className="overlay left" />
          </E.GlowMaskLeft>
        </E.BlurEffectHigh>
        <E.BlurEffectLow>
          <E.GlowMaskTop>
            <E.GlowContent speed={speed} className="scroll top" />
            <E.GlowContent speed={speed} className="overlay top" />
          </E.GlowMaskTop>
          <E.GlowMaskRight>
            <E.GlowContent speed={speed} className="scroll right" />
            <E.GlowContent speed={speed} className="overlay right" />
          </E.GlowMaskRight>
          <E.GlowMaskBottom>
            <E.GlowContent speed={speed} className="scroll bottom" />
            <E.GlowContent speed={speed} className="overlay bottom" />
          </E.GlowMaskBottom>
          <E.GlowMaskLeft>
            <E.GlowContent speed={speed} className="scroll left" />
            <E.GlowContent speed={speed} className="overlay left" />
          </E.GlowMaskLeft>
        </E.BlurEffectLow>
      </E.BorderContainer>
    </E.AnimatedBorderWrapper>
  );
};

import * as E from './ParallaxBackground.styles';
import { ParallaxLayer } from './ParallaxLayer';
import React from 'react';
import type { FC } from 'react';
import type { ParallaxBackgroundProps } from './ParallaxBackground.types';

export const ParallaxBackground: FC<ParallaxBackgroundProps> = ({
  className,
  layers,
}) => {
  return (
    <E.StyledParallaxBackground className={className}>
      <E.Container>
        {layers.map(
          ({ isBackgroundLayer, className, imageSrc, delay, duration }, i) => (
            <ParallaxLayer
              key={i}
              delay={delay}
              duration={duration}
              isBackgroundLayer={isBackgroundLayer}
              className={className}
              imageSrc={imageSrc}
            />
          ),
        )}
      </E.Container>
    </E.StyledParallaxBackground>
  );
};

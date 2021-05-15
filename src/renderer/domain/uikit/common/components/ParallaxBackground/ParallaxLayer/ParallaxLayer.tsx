import * as E from './ParallaxLayer.styles';
import React from 'react';
import type { FC } from 'react';
import type { ParallaxLayerProps } from './ParallaxLayer.types';

export const ParallaxLayer: FC<ParallaxLayerProps> = ({
  className,
  isBackgroundLayer,
  imageSrc,
  delay,
  duration,
}) => {
  return (
    <E.StyledParallaxLayer
      className={className}
      imageSrc={imageSrc}
      delay={delay}
      duration={duration}
      isBackgroundLayer={isBackgroundLayer}
    />
  );
};

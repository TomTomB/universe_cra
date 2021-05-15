import * as E from './BackgroundSwitcher.styles';
import React from 'react';
import type { BackgroundSwitcherProps } from './BackgroundSwitcher.types';
import type { FC } from 'react';

export const BackgroundSwitcher: FC<BackgroundSwitcherProps> = ({
  items,
  currentIndex,
  className,
  switchAnimation = 'fade',
}) => {
  return (
    <E.StyledBackgroundSwitcher className={className}>
      {items.map(({ alt, src }, index) => (
        <img
          src={src}
          alt={alt}
          key={index}
          className={currentIndex === index ? switchAnimation : 'hidden'}
        />
      ))}
    </E.StyledBackgroundSwitcher>
  );
};

import * as E from './FramedIcon.styles';
import React from 'react';
import type { FC } from 'react';
import type { FramedIconProps } from './FramedIcon.types';

export const FramedIcon: FC<FramedIconProps> = ({
  className,
  children,
  innerShadow,
  zoom,
  altFrame,
  interactive,
  disabled,
}) => {
  return (
    <E.StyledFramedIcon
      className={className}
      zoom={zoom}
      interactive={interactive}
      data-disabled={disabled}
      altFrame={altFrame}
    >
      <E.FrameColor>
        {children}
        <E.InnerMask innerShadow={innerShadow} />
      </E.FrameColor>
    </E.StyledFramedIcon>
  );
};

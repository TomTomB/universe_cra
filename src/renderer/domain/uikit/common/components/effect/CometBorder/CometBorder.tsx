import * as E from './CometBorder.styles';
import React, { FC } from 'react';
import type { CometBorderProps } from './CometBorder.types';

export const CometBorder: FC<CometBorderProps> = ({
  borderColor = 'transparent',
  borderWith = 2,
  cometColor = '#f0e6d2',
  cometLength = 100,
  height = 0,
  width = 0,
}) => {
  return (
    <E.StyledCometBorder
      borderColor={borderColor}
      borderWith={borderWith}
      cometColor={cometColor}
      cometLength={cometLength}
      height={height}
      width={width}
    >
      <E.Glow>
        <E.Top>
          <E.TopComet />
        </E.Top>
        <E.Bottom>
          <E.BottomComet />
        </E.Bottom>
        <E.Left>
          <E.LeftComet />
        </E.Left>
        <E.Right>
          <E.RightComet />
        </E.Right>
      </E.Glow>
    </E.StyledCometBorder>
  );
};

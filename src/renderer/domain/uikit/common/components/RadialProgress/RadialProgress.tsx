import * as E from './RadialProgress.styles';
import { PolygonGenerator } from '@universe/renderer/uikit/core';
import { RADIAL_PROGRESS_FULL } from './RadialProgress.types';
import React from 'react';
import type { FC } from 'react';
import type { RadialProgressProps } from './RadialProgress.types';

export const RadialProgress: FC<RadialProgressProps> = ({
  topLayerChildren,
  middleLayerChildren,
  bottomLayerChildren,
  className,
  progressType,
  progress,
  polygonConfig = RADIAL_PROGRESS_FULL,
}) => {
  const generator = new PolygonGenerator(
    polygonConfig.startAngle,
    polygonConfig.endAngle,
  );

  return (
    <E.StyledRadialProgress className={className} progressType={progressType}>
      <E.BottomLayer>{bottomLayerChildren} </E.BottomLayer>
      <E.MiddleLayer path={generator.generatePolygon(progress)}>
        {middleLayerChildren}
      </E.MiddleLayer>
      <E.TopLayer> {topLayerChildren} </E.TopLayer>
    </E.StyledRadialProgress>
  );
};

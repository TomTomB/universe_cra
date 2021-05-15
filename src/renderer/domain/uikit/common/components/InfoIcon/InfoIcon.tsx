import * as E from './InfoIcon.styles';
import React from 'react';
import type { FC } from 'react';
import type { InfoIconProps } from './InfoIcon.types';

export const InfoIcon: FC<InfoIconProps> = ({ className, width = 18 }) => {
  return <E.StyledInfoIcon className={className} width={width} />;
};

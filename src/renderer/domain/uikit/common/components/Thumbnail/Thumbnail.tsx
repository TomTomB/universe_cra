import * as E from './Thumbnail.styles';
import React from 'react';
import type { FC } from 'react';
import type { ThumbnailProps } from './Thumbnail.types';

export const Thumbnail: FC<ThumbnailProps> = ({ children, disabled }) => {
  return (
    <E.StyledThumbnail data-disabled={disabled}> {children} </E.StyledThumbnail>
  );
};
